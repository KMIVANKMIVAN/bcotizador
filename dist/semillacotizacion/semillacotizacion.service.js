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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemillacotizacionService = void 0;
const common_1 = require("@nestjs/common");
const semillacotizacion_datos_1 = require("./datos/semillacotizacion-datos");
const config_1 = require("@nestjs/config");
const ciudadeszonas_service_1 = require("../cotizacion/ciudadeszonas/ciudadeszonas.service");
const nivelespisos_service_1 = require("../cotizacion/nivelespisos/nivelespisos.service");
const orientaciones_service_1 = require("../cotizacion/orientaciones/orientaciones.service");
const tiposparedes_service_1 = require("../cotizacion/tiposparedes/tiposparedes.service");
const tipossuelos_service_1 = require("../cotizacion/tipossuelos/tipossuelos.service");
const tipostechos_service_1 = require("../cotizacion/tipostechos/tipostechos.service");
const tiposvidrios_service_1 = require("../cotizacion/tiposvidrios/tiposvidrios.service");
const tiposcotizaciones_service_1 = require("../cotizacion/tiposcotizaciones/tiposcotizaciones.service");
const factoresviajes_service_1 = require("../cotizacion/factoresviajes/factoresviajes.service");
const gastospersonas_service_1 = require("../cotizacion/gastospersonas/gastospersonas.service");
const toallerosejes50cm_service_1 = require("../cotizacion/producto/toallerosejes50cm/toallerosejes50cm.service");
const radiadoresejes50cm_service_1 = require("../cotizacion/producto/radiadoresejes50cm/radiadoresejes50cm.service");
const instaltuberias_service_1 = require("../cotizacion/tiempos/instaltuberias/instaltuberias.service");
const instalradiatoalleros_service_1 = require("../cotizacion/tiempos/instalradiatoalleros/instalradiatoalleros.service");
let SemillacotizacionService = class SemillacotizacionService {
    constructor(configService, ciudadeszonasService, nivelespisosService, orientacionesService, tiposparedesService, tipossuelosService, tipostechosService, tiposvidriosService, tiposcotizacionesService, factoresviajesService, gastospersonasService, toallerosejes50cmService, radiadoresejes50cmService, instaltuberiasService, instalradiatoallerosService) {
        this.configService = configService;
        this.ciudadeszonasService = ciudadeszonasService;
        this.nivelespisosService = nivelespisosService;
        this.orientacionesService = orientacionesService;
        this.tiposparedesService = tiposparedesService;
        this.tipossuelosService = tipossuelosService;
        this.tipostechosService = tipostechosService;
        this.tiposvidriosService = tiposvidriosService;
        this.tiposcotizacionesService = tiposcotizacionesService;
        this.factoresviajesService = factoresviajesService;
        this.gastospersonasService = gastospersonasService;
        this.toallerosejes50cmService = toallerosejes50cmService;
        this.radiadoresejes50cmService = radiadoresejes50cmService;
        this.instaltuberiasService = instaltuberiasService;
        this.instalradiatoallerosService = instalradiatoallerosService;
        this.isProd = configService.get('STATE') === 'prod';
    }
    async ejecutarSemillacotizacion() {
        try {
            if (this.isProd) {
                throw new common_1.BadRequestException({
                    error: `Error al ejecutar la semilla`,
                    message: `Problemas en la ejecucion de la semilla`,
                });
            }
            await this.crearNivelespisos();
            await this.crearOrientaciones();
            await this.crearTiposparedes();
            await this.crearTipossuelos();
            await this.crearTipostechos();
            await this.crearTiposvidrios();
            await this.crearCiudadeszonas();
            await this.crearTiposcotizaciones();
            await this.crearGastospersonas();
            await this.crearInstalartuberias();
            await this.crearInstalasradiatoalleros();
            await this.crearToallerosejes50cm();
            await this.crearRadiadoresejes50cm();
            return true;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                message: `Error del Servidor. Revisar el metodo (ejecutarSemilla) de la ruta "semillas"`,
                error: error,
            });
        }
    }
    async crearNivelespisos() {
        const nivelespisos = [];
        for (const nivelpiso of semillacotizacion_datos_1.SEMILLA_NIVELPISO) {
            nivelespisos.push(await this.nivelespisosService.createSemilla(nivelpiso));
        }
        return nivelespisos[0];
    }
    async crearOrientaciones() {
        const orientaciones = [];
        for (const orientacion of semillacotizacion_datos_1.SEMILLA_ORIENTACION) {
            orientaciones.push(await this.orientacionesService.createSemilla(orientacion));
        }
        return orientaciones[0];
    }
    async crearTiposparedes() {
        const tiposparedes = [];
        for (const tipopared of semillacotizacion_datos_1.SEMILLA_TIPOPARED) {
            tiposparedes.push(await this.tiposparedesService.createSemilla(tipopared));
        }
        return tiposparedes[0];
    }
    async crearTipossuelos() {
        const tipossuelos = [];
        for (const tiposuelo of semillacotizacion_datos_1.SEMILLA_TIPOSUELO) {
            tipossuelos.push(await this.tipossuelosService.createSemilla(tiposuelo));
        }
        return tipossuelos[0];
    }
    async crearTipostechos() {
        const tipostechos = [];
        for (const tipotecho of semillacotizacion_datos_1.SEMILLA_TIPOTECHO) {
            tipostechos.push(await this.tipostechosService.createSemilla(tipotecho));
        }
        return tipostechos[0];
    }
    async crearTiposvidrios() {
        const tiposvidrios = [];
        for (const tipovidrio of semillacotizacion_datos_1.SEMILLA_TIPOVIDRIO) {
            tiposvidrios.push(await this.tiposvidriosService.createSemilla(tipovidrio));
        }
        return tiposvidrios[0];
    }
    async crearTiposcotizaciones() {
        const tiposcotizaciones = [];
        for (const tipocotizacion of semillacotizacion_datos_1.SEMILLA_TIPOCOTIZACION) {
            tiposcotizaciones.push(await this.tiposcotizacionesService.createSemilla(tipocotizacion));
        }
        return tiposcotizaciones[0];
    }
    async crearGastospersonas() {
        const gastopersona = [];
        for (const gastospersonas of semillacotizacion_datos_1.SEMILLA_GASTOPERSONA) {
            gastopersona.push(await this.gastospersonasService.createSemilla(gastospersonas));
        }
        return gastopersona[0];
    }
    async crearInstalasradiatoalleros() {
        const instalradiatoallero = [];
        for (const instalasradiatoalleros of semillacotizacion_datos_1.SEMILLA_INSTALRADIATOALEROS) {
            instalradiatoallero.push(await this.instalradiatoallerosService.createSemilla(instalasradiatoalleros));
        }
        return instalradiatoallero[0];
    }
    async crearInstalartuberias() {
        const instalartuberias = [];
        for (const instaltuberia of semillacotizacion_datos_1.SEMILLA_INSTALTUBERIAS) {
            instalartuberias.push(await this.instaltuberiasService.createSemilla(instaltuberia));
        }
        return instalartuberias[0];
    }
    async crearRadiadoresejes50cm() {
        const radiadoresejes50cm = [];
        for (const radiadoreje50cm of semillacotizacion_datos_1.SEMILLA_RADIADORES50CM) {
            radiadoresejes50cm.push(await this.radiadoresejes50cmService.createSemilla(radiadoreje50cm));
        }
        return radiadoresejes50cm[0];
    }
    async crearToallerosejes50cm() {
        const toallerosejes50cm = [];
        for (const toalleroeje50cm of semillacotizacion_datos_1.SEMILLA_TOALLEROS50CM) {
            toallerosejes50cm.push(await this.toallerosejes50cmService.createSemilla(toalleroeje50cm));
        }
        return toallerosejes50cm[0];
    }
    async crearCiudadeszonas() {
        const ciudadeszonas = [];
        for (const ciudadzona of semillacotizacion_datos_1.SEMILLA_CIUDADZONA) {
            ciudadeszonas.push(await this.ciudadeszonasService.createSemilla(ciudadzona));
        }
        return ciudadeszonas[0];
    }
};
exports.SemillacotizacionService = SemillacotizacionService;
exports.SemillacotizacionService = SemillacotizacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        ciudadeszonas_service_1.CiudadeszonasService,
        nivelespisos_service_1.NivelespisosService,
        orientaciones_service_1.OrientacionesService,
        tiposparedes_service_1.TiposparedesService,
        tipossuelos_service_1.TipossuelosService,
        tipostechos_service_1.TipostechosService,
        tiposvidrios_service_1.TiposvidriosService,
        tiposcotizaciones_service_1.TiposcotizacionesService,
        factoresviajes_service_1.FactoresviajesService,
        gastospersonas_service_1.GastospersonasService,
        toallerosejes50cm_service_1.Toallerosejes50cmService,
        radiadoresejes50cm_service_1.Radiadoresejes50cmService,
        instaltuberias_service_1.InstaltuberiasService,
        instalradiatoalleros_service_1.InstalradiatoallerosService])
], SemillacotizacionService);
//# sourceMappingURL=semillacotizacion.service.js.map