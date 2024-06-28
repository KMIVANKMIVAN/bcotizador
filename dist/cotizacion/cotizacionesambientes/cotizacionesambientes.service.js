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
exports.CotizacionesambientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cotizacionambiente_entity_1 = require("./entities/cotizacionambiente.entity");
const cotizaciones_service_1 = require("../cotizaciones/cotizaciones.service");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let CotizacionesambientesService = class CotizacionesambientesService {
    constructor(cotizacionambienteRepository, cotizacionesService) {
        this.cotizacionambienteRepository = cotizacionambienteRepository;
        this.cotizacionesService = cotizacionesService;
    }
    async create(createCotizacionambienteDto) {
        try {
            const buscarCotizacion = await this.cotizacionesService.findOne(createCotizacionambienteDto.cotizacion_id);
            createCotizacionambienteDto.nombreambiente = (0, capitalizeTextos_1.capitalizeTextos)(createCotizacionambienteDto.nombreambiente);
            const { cotizacion_id, ...cotizacionDatos } = createCotizacionambienteDto;
            const nuevaCotizacion = this.cotizacionambienteRepository.create({
                ...cotizacionDatos,
                cotizacion: buscarCotizacion,
            });
            return await this.cotizacionambienteRepository.save(nuevaCotizacion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorCotizacion(id) {
        try {
            const cotizacionesambientes = await this.cotizacionambienteRepository.find({
                where: { cotizacion: { id } },
            });
            if (!cotizacionesambientes || cotizacionesambientes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cotizacionesambientes`,
                });
            }
            return cotizacionesambientes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const cotizacionesambientes = await this.cotizacionambienteRepository.find({ relations: ['cotizacion',] });
            if (!cotizacionesambientes || cotizacionesambientes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cotizacionesambientes`,
                });
            }
            return cotizacionesambientes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const cotizacionambiente = await this.cotizacionambienteRepository.findOne({
                where: { id },
            });
            if (!cotizacionambiente) {
                throw new common_1.NotFoundException({
                    message: `Cotizacionambiente con ID ${id} no fue encontrado`,
                });
            }
            return cotizacionambiente;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateCotizacionambienteDto) {
        try {
            const existeCotizacionambiente = await this.findOne(id);
            const buscarCotizacion = await this.cotizacionesService.findOne(updateCotizacionambienteDto.cotizacion_id);
            updateCotizacionambienteDto.nombreambiente = (0, capitalizeTextos_1.capitalizeTextos)(updateCotizacionambienteDto.nombreambiente);
            const actualizarCotizacionambiente = await this.cotizacionambienteRepository.preload({
                id,
                ...updateCotizacionambienteDto
            });
            actualizarCotizacionambiente.cotizacion = buscarCotizacion;
            return await this.cotizacionambienteRepository.save(actualizarCotizacionambiente);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const cotizacionambiente = await this.findOne(id);
            await this.cotizacionambienteRepository.delete(id);
            return { success: true, message: `Se eliminó la Cotizacionambiente : ${cotizacionambiente.nombreambiente}` };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cotizacionesambientes"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.CotizacionesambientesService = CotizacionesambientesService;
exports.CotizacionesambientesService = CotizacionesambientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cotizacionambiente_entity_1.Cotizacionambiente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cotizaciones_service_1.CotizacionesService])
], CotizacionesambientesService);
//# sourceMappingURL=cotizacionesambientes.service.js.map