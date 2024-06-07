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
exports.TiposcotizacionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipocotizacion_entity_1 = require("./entities/tipocotizacion.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let TiposcotizacionesService = class TiposcotizacionesService {
    constructor(tipocotizacionRepository) {
        this.tipocotizacionRepository = tipocotizacionRepository;
    }
    async createSemilla(createTipocotizacionDto) {
        try {
            createTipocotizacionDto.tipocotizacion = (0, capitalizeTextos_1.capitalizeTextos)(createTipocotizacionDto.tipocotizacion);
            const nuevoTipocotizacion = this.tipocotizacionRepository.create(createTipocotizacionDto);
            return await this.tipocotizacionRepository.save(nuevoTipocotizacion);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "tiposcotizaciones"`,
                error: `${error}`,
            });
        }
    }
    async create(createTipocotizacionDto) {
        try {
            createTipocotizacionDto.tipocotizacion = (0, capitalizeTextos_1.capitalizeTextos)(createTipocotizacionDto.tipocotizacion);
            const nuevoTipocotizacion = this.tipocotizacionRepository.create(createTipocotizacionDto);
            return await this.tipocotizacionRepository.save(nuevoTipocotizacion);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposcotizaciones"`,
                error: `${error}`,
            });
        }
    }
    async findAllPorNombTipoCotiz(tipocotizacion) {
        try {
            const tiposcotizaciones = await this.tipocotizacionRepository.createQueryBuilder('tipocotizacion')
                .where('LOWER(tipocotizacion.tipocotizacion) LIKE LOWER(:tipocotizacion)', { tipocotizacion: `%${tipocotizacion.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tipos cotizaciones: ${tipocotizacion}`,
                });
            }
            return tiposcotizaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombTipoCotiz) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const tiposcotizaciones = await this.tipocotizacionRepository.find();
            if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposcotizaciones`,
                });
            }
            return tiposcotizaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const tiposcotizaciones = await this.tipocotizacionRepository.find();
            if (!tiposcotizaciones || tiposcotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposcotizaciones`,
                });
            }
            return tiposcotizaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const Tipocotizacion = await this.tipocotizacionRepository.findOneBy({ id });
            if (!Tipocotizacion) {
                throw new common_1.NotFoundException({
                    message: `Tipocotizacion con ID: ${id} no fue encontrada`,
                });
            }
            return Tipocotizacion;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateTipocotizacionDto) {
        try {
            const existeTipocotizacion = await this.findOne(id);
            updateTipocotizacionDto.tipocotizacion = (0, capitalizeTextos_1.capitalizeTextos)(updateTipocotizacionDto.tipocotizacion);
            const actualizarTipocotizacion = this.tipocotizacionRepository.merge(existeTipocotizacion, updateTipocotizacionDto);
            return await this.tipocotizacionRepository.save(actualizarTipocotizacion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const Tipocotizacion = await this.findOne(id);
            await this.tipocotizacionRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Tipocotizacion con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposcotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.TiposcotizacionesService = TiposcotizacionesService;
exports.TiposcotizacionesService = TiposcotizacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipocotizacion_entity_1.Tipocotizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TiposcotizacionesService);
//# sourceMappingURL=tiposcotizaciones.service.js.map