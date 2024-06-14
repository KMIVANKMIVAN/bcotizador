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
exports.UnidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unidade_entity_1 = require("./entities/unidade.entity");
const direcciones_service_1 = require("../direcciones/direcciones.service");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let UnidadesService = class UnidadesService {
    constructor(unidadRepository, direccionesService) {
        this.unidadRepository = unidadRepository;
        this.direccionesService = direccionesService;
    }
    async create(createUnidadeDto) {
        try {
            const buscarDireccion = await this.direccionesService.findOne(createUnidadeDto.direccion_id);
            createUnidadeDto.unidad = (0, capitalizeTextos_1.capitalizeTextos)(createUnidadeDto.unidad);
            createUnidadeDto.descripcion = (0, capitalizeTextos_1.capitalizeTextos)(createUnidadeDto.descripcion);
            const { direccion_id, ...unidadDatos } = createUnidadeDto;
            const nuevaUnidad = this.unidadRepository.create({
                ...unidadDatos,
                direccion: buscarDireccion,
            });
            return await this.unidadRepository.save(nuevaUnidad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNombUnidad(unidad) {
        try {
            const unidades = await this.unidadRepository.createQueryBuilder('unidad')
                .where('LOWER(unidad.unidad) LIKE LOWER(:unidad)', { unidad: `%${unidad.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!unidades || unidades.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron unidades: ${unidad}`,
                });
            }
            return unidades;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombUnidad) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const unidades = await this.unidadRepository.find({ relations: ['direccion'] });
            if (!unidades || unidades.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Unidades`,
                });
            }
            return unidades;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const unidad = await this.unidadRepository.findOne({
                where: { id },
                relations: ['direccion'],
            });
            if (!unidad) {
                throw new common_1.NotFoundException({
                    message: `Unidad con ID: ${id} no fue encontrada`,
                });
            }
            return unidad;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateUnidadeDto) {
        try {
            const existeUnidad = await this.findOne(id);
            updateUnidadeDto.unidad = (0, capitalizeTextos_1.capitalizeTextos)(updateUnidadeDto.unidad);
            updateUnidadeDto.descripcion = (0, capitalizeTextos_1.capitalizeTextos)(updateUnidadeDto.descripcion);
            const buscarDireccion = await this.direccionesService.findOne(updateUnidadeDto.direccion_id);
            const actualizarUnidad = await this.unidadRepository.preload({
                id,
                ...updateUnidadeDto,
            });
            actualizarUnidad.direccion = buscarDireccion;
            return await this.unidadRepository.save(actualizarUnidad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const unidad = await this.findOne(id);
            await this.unidadRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Unidad con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "unidades"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unidade_entity_1.Unidad)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        direcciones_service_1.DireccionesService])
], UnidadesService);
//# sourceMappingURL=unidades.service.js.map