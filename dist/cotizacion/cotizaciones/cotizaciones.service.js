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
exports.CotizacionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cotizacion_entity_1 = require("./entities/cotizacion.entity");
const ciudadeszonas_service_1 = require("../ciudadeszonas/ciudadeszonas.service");
const nivelespisos_service_1 = require("../nivelespisos/nivelespisos.service");
const orientaciones_service_1 = require("../orientaciones/orientaciones.service");
const tiposparedes_service_1 = require("../tiposparedes/tiposparedes.service");
const tipossuelos_service_1 = require("../tipossuelos/tipossuelos.service");
const tipostechos_service_1 = require("../tipostechos/tipostechos.service");
const tiposvidrios_service_1 = require("../tiposvidrios/tiposvidrios.service");
let CotizacionesService = class CotizacionesService {
    constructor(cotizacionRepository, ciudadeszonasService, nivelespisosService, orientacionesService, tiposparedesService, tipossuelosService, tipostechosService, tiposvidriosService) {
        this.cotizacionRepository = cotizacionRepository;
        this.ciudadeszonasService = ciudadeszonasService;
        this.nivelespisosService = nivelespisosService;
        this.orientacionesService = orientacionesService;
        this.tiposparedesService = tiposparedesService;
        this.tipossuelosService = tipossuelosService;
        this.tipostechosService = tipostechosService;
        this.tiposvidriosService = tiposvidriosService;
    }
    async create(createCotizacionDto) {
        try {
            const buscarCiudadZona = await this.ciudadeszonasService.findOne(createCotizacionDto.ciudadzona_id);
            const buscarNivelPiso = await this.nivelespisosService.findOne(createCotizacionDto.nivelpiso_id);
            const buscarOrientacion = await this.orientacionesService.findOne(createCotizacionDto.orientacion_id);
            const buscarTipoPared = await this.tiposparedesService.findOne(createCotizacionDto.tipopared_id);
            const buscarTipoSuelo = await this.tipossuelosService.findOne(createCotizacionDto.tiposuelo_id);
            const buscarTipoTecho = await this.tipostechosService.findOne(createCotizacionDto.tipotecho_id);
            const buscarTipoVidrio = await this.tiposvidriosService.findOne(createCotizacionDto.tipovidrio_id);
            const { ciudadzona_id, nivelpiso_id, orientacion_id, tipopared_id, tiposuelo_id, tipotecho_id, tipovidrio_id, ...cotizacionDatos } = createCotizacionDto;
            const nuevaCotizacion = this.cotizacionRepository.create({
                ...cotizacionDatos,
                ciudadzona: buscarCiudadZona,
                nivelpiso: buscarNivelPiso,
                orientacion: buscarOrientacion,
                tipopared: buscarTipoPared,
                tiposuelo: buscarTipoSuelo,
                tipotecho: buscarTipoTecho,
                tipovidrio: buscarTipoVidrio,
            });
            return await this.cotizacionRepository.save(nuevaCotizacion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "cotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const cotizaciones = await this.cotizacionRepository.find({ relations: ['ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio',] });
            if (!cotizaciones || cotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cotizaciones`,
                });
            }
            return cotizaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const cotizacion = await this.cotizacionRepository.findOne({
                where: { id },
            });
            if (!cotizacion) {
                throw new common_1.NotFoundException({
                    message: `Cotizacion con ID ${id} no fue encontrada`,
                });
            }
            return cotizacion;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateCotizacionDto) {
        try {
            const existeCotizacion = await this.findOne(id);
            const buscarCiudadZona = await this.ciudadeszonasService.findOne(updateCotizacionDto.ciudadzona_id);
            const buscarNivelPiso = await this.nivelespisosService.findOne(updateCotizacionDto.nivelpiso_id);
            const buscarOrientacion = await this.orientacionesService.findOne(updateCotizacionDto.orientacion_id);
            const buscarTipoPared = await this.tiposparedesService.findOne(updateCotizacionDto.tipopared_id);
            const buscarTipoSuelo = await this.tipossuelosService.findOne(updateCotizacionDto.tiposuelo_id);
            const buscarTipoTecho = await this.tipostechosService.findOne(updateCotizacionDto.tipotecho_id);
            const buscarTipoVidrio = await this.tiposvidriosService.findOne(updateCotizacionDto.tipovidrio_id);
            const actualizarCotizacion = await this.cotizacionRepository.preload({
                id,
                ...updateCotizacionDto
            });
            actualizarCotizacion.ciudadzona = buscarCiudadZona;
            actualizarCotizacion.nivelpiso = buscarNivelPiso;
            actualizarCotizacion.orientacion = buscarOrientacion;
            actualizarCotizacion.tipopared = buscarTipoPared;
            actualizarCotizacion.tiposuelo = buscarTipoSuelo;
            actualizarCotizacion.tipotecho = buscarTipoTecho;
            actualizarCotizacion.tipovidrio = buscarTipoVidrio;
            return await this.cotizacionRepository.save(actualizarCotizacion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "cotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const cotizacion = await this.findOne(id);
            await this.cotizacionRepository.delete(id);
            return { success: true, message: `Se eliminó la Cotizacion con ID: ${id}` };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cotizaciones"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.CotizacionesService = CotizacionesService;
exports.CotizacionesService = CotizacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cotizacion_entity_1.Cotizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ciudadeszonas_service_1.CiudadeszonasService,
        nivelespisos_service_1.NivelespisosService,
        orientaciones_service_1.OrientacionesService,
        tiposparedes_service_1.TiposparedesService,
        tipossuelos_service_1.TipossuelosService,
        tipostechos_service_1.TipostechosService,
        tiposvidrios_service_1.TiposvidriosService])
], CotizacionesService);
//# sourceMappingURL=cotizaciones.service.js.map