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
exports.CiudadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ciudad_entity_1 = require("./entities/ciudad.entity");
const capitalizeTextos_1 = require("../utils/capitalizeTextos");
let CiudadesService = class CiudadesService {
    constructor(ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }
    async createSemilla(createCiudadDto) {
        try {
            createCiudadDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(createCiudadDto.ciudad);
            const nuevaCiudad = this.ciudadRepository.create(createCiudadDto);
            return await this.ciudadRepository.save(nuevaCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudades"`,
                error: `${error}`,
            });
        }
    }
    async create(createCiudadDto) {
        try {
            createCiudadDto.valor = Number(createCiudadDto.valor) * 1 / 100;
            createCiudadDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(createCiudadDto.ciudad);
            const nuevaCiudad = this.ciudadRepository.create(createCiudadDto);
            return await this.ciudadRepository.save(nuevaCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "ciudades"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const ciudades = await this.ciudadRepository.find();
            if (!ciudades || ciudades.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron ciudades`,
                });
            }
            return ciudades;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const ciudades = await this.ciudadRepository.find();
            if (!ciudades || ciudades.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron ciudades`,
                });
            }
            ciudades.forEach((ciudad) => delete ciudad.valor);
            return ciudades;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "ciudades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const ciudad = await this.ciudadRepository.findOneBy({ id });
            if (!ciudad) {
                throw new common_1.NotFoundException({
                    message: `Ciudad con ID: ${id} no fue encontrada`,
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
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "ciudades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateCiudadDto) {
        try {
            const existeCiudad = await this.findOne(id);
            updateCiudadDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(updateCiudadDto.ciudad);
            const actualizarCiudad = this.ciudadRepository.merge(existeCiudad, updateCiudadDto);
            return await this.ciudadRepository.save(actualizarCiudad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "ciudades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const ciudad = await this.findOne(id);
            await this.ciudadRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Ciudad con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "ciudades"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.CiudadesService = CiudadesService;
exports.CiudadesService = CiudadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ciudad_entity_1.Ciudad)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CiudadesService);
//# sourceMappingURL=ciudades.service.js.map