"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadeszonasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ciudadzona_entity_1 = require("./entities/ciudadzona.entity");
const ciudades_service_1 = require("../../ciudades/ciudades.service");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let CiudadeszonasService = class CiudadeszonasService {
    constructor(ciudadzonaRepository, ciudadesService) {
        this.ciudadzonaRepository = ciudadzonaRepository;
        this.ciudadesService = ciudadesService;
    }
    async createSemilla(createCiudadzonaDto) {
        try {
            const buscarCiudad = await this.ciudadesService.findOne(createCiudadzonaDto.ciudad_id);
            createCiudadzonaDto.ciudadzona = (0, capitalizeTextos_1.capitalizeTextos)(createCiudadzonaDto.ciudadzona);
            const { ciudad_id, ...ciudadzonaDatos } = createCiudadzonaDto;
            const nuevaCiudadzona = this.ciudadzonaRepository.create({
                ...ciudadzonaDatos,
                ciudad: buscarCiudad,
            });
            return await this.ciudadzonaRepository.save(nuevaCiudadzona);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudadeszonas"`,
                error: `${error}`,
            });
        }
    }
    async create(createCiudadzonaDto) {
        try {
            const buscarCiudad = await this.ciudadesService.findOne(createCiudadzonaDto.ciudad_id);
            createCiudadzonaDto.valor = Number(createCiudadzonaDto.valor) * 1 / 100;
            createCiudadzonaDto.ciudadzona = (0, capitalizeTextos_1.capitalizeTextos)(createCiudadzonaDto.ciudadzona);
            const { ciudad_id, ...ciudadzonaDatos } = createCiudadzonaDto;
            const nuevaCiudadzona = this.ciudadzonaRepository.create({
                ...ciudadzonaDatos,
                ciudad: buscarCiudad,
            });
            return await this.ciudadzonaRepository.save(nuevaCiudadzona);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudadeszonas"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const ciudadeszonas = await this.ciudadzonaRepository.find({ relations: ['ciudad'] });
            if (!ciudadeszonas || ciudadeszonas.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron ciudadeszonas`,
                });
            }
            return ciudadeszonas;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudadeszonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const ciudadeszonas = await this.ciudadzonaRepository.find();
            if (!ciudadeszonas || ciudadeszonas.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron ciudadeszonas`,
                });
            }
            ciudadeszonas.forEach((coiudadzona) => delete coiudadzona.valor);
            return ciudadeszonas;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudadeszonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const ciudad = await this.ciudadzonaRepository.findOneBy({ id });
            if (!ciudad) {
                throw new common_1.NotFoundException({
                    message: `Ciudadzona con ID: ${id} no fue encontrada`,
                });
            }
            return ciudad;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "ciudadeszonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateCiudadzonaDto) {
        try {
            const existeCiudadzona = await this.findOne(id);
            const buscarCiudad = await this.ciudadesService.findOne(updateCiudadzonaDto.ciudad_id);
            updateCiudadzonaDto.ciudadzona = (0, capitalizeTextos_1.capitalizeTextos)(updateCiudadzonaDto.ciudadzona);
            const actualizarCiudadzona = await this.ciudadzonaRepository.preload({
                id,
                ...updateCiudadzonaDto,
            });
            actualizarCiudadzona.ciudad = buscarCiudad;
            return await this.ciudadzonaRepository.save(actualizarCiudadzona);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "ciudadeszonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const ciudadzona = await this.findOne(id);
            await this.ciudadzonaRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Ciudadzona con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "ciudadeszonas"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.CiudadeszonasService = CiudadeszonasService;
exports.CiudadeszonasService = CiudadeszonasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ciudadzona_entity_1.Ciudadzona)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ciudades_service_1.CiudadesService])
], CiudadeszonasService);
//# sourceMappingURL=ciudadeszonas.service.js.map