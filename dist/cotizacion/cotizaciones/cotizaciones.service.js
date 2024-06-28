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
const toallerosejes50cm_service_1 = require("../producto/toallerosejes50cm/toallerosejes50cm.service");
const radiadoresejes50cm_service_1 = require("../producto/radiadoresejes50cm/radiadoresejes50cm.service");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let CotizacionesService = class CotizacionesService {
    constructor(cotizacionRepository, ciudadeszonasService, nivelespisosService, orientacionesService, tiposparedesService, tipossuelosService, tipostechosService, tiposvidriosService, toallerosejes50cmService, radiadoresejes50cmService) {
        this.cotizacionRepository = cotizacionRepository;
        this.ciudadeszonasService = ciudadeszonasService;
        this.nivelespisosService = nivelespisosService;
        this.orientacionesService = orientacionesService;
        this.tiposparedesService = tiposparedesService;
        this.tipossuelosService = tipossuelosService;
        this.tipostechosService = tipostechosService;
        this.tiposvidriosService = tiposvidriosService;
        this.toallerosejes50cmService = toallerosejes50cmService;
        this.radiadoresejes50cmService = radiadoresejes50cmService;
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
            let buscarToalleroeje50cm = null;
            if (createCotizacionDto.toalleroeje50cm_id) {
                buscarToalleroeje50cm = await this.toallerosejes50cmService.findOne(createCotizacionDto.toalleroeje50cm_id);
            }
            const buscarRadiadoreje50cm = await this.radiadoresejes50cmService.findOne(createCotizacionDto.radiadoreje50cm_id);
            createCotizacionDto.nombrecotizacion = (0, capitalizeTextos_1.capitalizeTextos)(createCotizacionDto.nombrecotizacion);
            const maxNroCotizacion = await this.cotizacionRepository
                .createQueryBuilder('cotizacion')
                .select('MAX(cotizacion.nrocotizacion)', 'max')
                .where('cotizacion.nombrecotizacion = :nombrecotizacion', { nombrecotizacion: createCotizacionDto.nombrecotizacion })
                .getRawOne();
            const maxNro = maxNroCotizacion.max ? parseInt(maxNroCotizacion.max, 10) : 0;
            createCotizacionDto.nrocotizacion = maxNro + 1;
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
                toalleroeje50cm: buscarToalleroeje50cm,
                radiadoreje50cm: buscarRadiadoreje50cm
            });
            delete nuevaCotizacion.ciudadzona.valor;
            delete nuevaCotizacion.nivelpiso.valor;
            delete nuevaCotizacion.orientacion.valor;
            delete nuevaCotizacion.tipopared.valor;
            delete nuevaCotizacion.tiposuelo.valor;
            delete nuevaCotizacion.tipotecho.valor;
            delete nuevaCotizacion.tipovidrio.valor;
            if (nuevaCotizacion.toalleroeje50cm) {
                delete nuevaCotizacion.toalleroeje50cm.potenciawats;
            }
            delete nuevaCotizacion.radiadoreje50cm.potenciawats;
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
            const cotizaciones = await this.cotizacionRepository.find({
                relations: [
                    'ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio',
                    'tipovidrio', 'tipovidrio', 'toalleroeje50cm', 'radiadoreje50cm'
                ],
            });
            if (!cotizaciones || cotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cotizaciones`,
                });
            }
            console.log("cotizaciones", cotizaciones);
            cotizaciones.forEach((cotizacion) => delete cotizacion.ciudadzona.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.nivelpiso.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.orientacion.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipopared.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tiposuelo.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipotecho.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipovidrio.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.radiadoreje50cm.potenciawats);
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
    async findAllPorNombCotiz(nombcotiz) {
        try {
            let cotizaciones;
            cotizaciones = await this.cotizacionRepository.find({
                where: { nombrecotizacion: nombcotiz },
                relations: [
                    'ciudadzona', 'nivelpiso', 'orientacion', 'tipopared', 'tiposuelo', 'tipotecho', 'tipovidrio',
                    'tipovidrio', 'tipovidrio', 'toalleroeje50cm', 'radiadoreje50cm'
                ],
            });
            if (!cotizaciones || cotizaciones.length === 0) {
                cotizaciones = await this.cotizacionRepository.createQueryBuilder('cotizacion')
                    .leftJoinAndSelect('cotizacion.ciudadzona', 'ciudadzona')
                    .leftJoinAndSelect('cotizacion.nivelpiso', 'nivelpiso')
                    .leftJoinAndSelect('cotizacion.orientacion', 'orientacion')
                    .leftJoinAndSelect('cotizacion.tipopared', 'tipopared')
                    .leftJoinAndSelect('cotizacion.tiposuelo', 'tiposuelo')
                    .leftJoinAndSelect('cotizacion.tipotecho', 'tipotecho')
                    .leftJoinAndSelect('cotizacion.tipovidrio', 'tipovidrio')
                    .leftJoinAndSelect('cotizacion.toalleroeje50cm', 'toalleroeje50cm')
                    .leftJoinAndSelect('cotizacion.radiadoreje50cm', 'radiadoreje50cm')
                    .where('LOWER(cotizacion.nombrecotizacion) LIKE LOWER(:nombcotiz)', { nombcotiz: `%${nombcotiz.toLowerCase()}%` })
                    .limit(5)
                    .getMany();
            }
            if (!cotizaciones || cotizaciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cotizaciones con nombre: ${nombcotiz}`,
                });
            }
            cotizaciones.forEach((cotizacion) => delete cotizacion.ciudadzona.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.nivelpiso.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.orientacion.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipopared.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tiposuelo.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipotecho.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.tipovidrio.valor);
            cotizaciones.forEach((cotizacion) => delete cotizacion.radiadoreje50cm.potenciawats);
            return cotizaciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombCotiz) de la ruta "cotizaciones"`,
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
                    message: `Cotizacion con ID ${id} no fue encontrado`,
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
    async findOnePorNombre(nomCotizacion) {
        try {
            const cotizacion = await this.cotizacionRepository.findOne({
                where: { nombrecotizacion: nomCotizacion },
            });
            if (!cotizacion) {
                throw new common_1.NotFoundException({
                    message: `Cotizacion con nombre ${nomCotizacion} no fue encontrado`,
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
            const buscarRadiadoreje50cm = await this.radiadoresejes50cmService.findOne(updateCotizacionDto.radiadoreje50cm_id);
            updateCotizacionDto.nombrecotizacion = (0, capitalizeTextos_1.capitalizeTextos)(updateCotizacionDto.nombrecotizacion);
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
            actualizarCotizacion.radiadoreje50cm = buscarRadiadoreje50cm;
            delete actualizarCotizacion.ciudadzona.valor;
            delete actualizarCotizacion.nivelpiso.valor;
            delete actualizarCotizacion.orientacion.valor;
            delete actualizarCotizacion.tipopared.valor;
            delete actualizarCotizacion.tiposuelo.valor;
            delete actualizarCotizacion.tipotecho.valor;
            delete actualizarCotizacion.tipovidrio.valor;
            delete actualizarCotizacion.radiadoreje50cm.potenciawats;
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
        tiposvidrios_service_1.TiposvidriosService,
        toallerosejes50cm_service_1.Toallerosejes50cmService,
        radiadoresejes50cm_service_1.Radiadoresejes50cmService])
], CotizacionesService);
//# sourceMappingURL=cotizaciones.service.js.map