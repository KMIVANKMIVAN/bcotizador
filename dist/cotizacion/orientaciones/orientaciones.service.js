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
exports.OrientacionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orientacion_entity_1 = require("./entities/orientacion.entity");
let OrientacionesService = class OrientacionesService {
    constructor(orientacionRepository) {
        this.orientacionRepository = orientacionRepository;
    }
    async createSemilla(createOrientacionDto) {
        try {
            const nuevaOrientacion = this.orientacionRepository.create(createOrientacionDto);
            return await this.orientacionRepository.save(nuevaOrientacion);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "orientaciones"`,
                error: `${error}`,
            });
        }
    }
    async create(createOrientacionDto) {
        try {
            createOrientacionDto.valor = Number(createOrientacionDto.valor) * 1 / 100;
            const nuevaOrientacion = this.orientacionRepository.create(createOrientacionDto);
            return await this.orientacionRepository.save(nuevaOrientacion);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "orientaciones"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const orientaciones = await this.orientacionRepository.find();
            if (!orientaciones || orientaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron orientaciones`,
                });
            }
            return orientaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "orientaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const orientacion = await this.orientacionRepository.findOneBy({ id });
            if (!orientacion) {
                throw new common_1.NotFoundException({
                    message: `Orientacion con ID: ${id} no fue encontrada`,
                });
            }
            return orientacion;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "orientaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateOrientacionDto) {
        try {
            const existeOrientacion = await this.findOne(id);
            const actualizarOrientacion = this.orientacionRepository.merge(existeOrientacion, updateOrientacionDto);
            return await this.orientacionRepository.save(actualizarOrientacion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "orientaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const orientacion = await this.findOne(id);
            await this.orientacionRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó la Orientacion con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "orientaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.OrientacionesService = OrientacionesService;
exports.OrientacionesService = OrientacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orientacion_entity_1.Orientacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrientacionesService);
//# sourceMappingURL=orientaciones.service.js.map