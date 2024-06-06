"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionesModule = void 0;
const common_1 = require("@nestjs/common");
const cotizaciones_service_1 = require("./cotizaciones.service");
const cotizaciones_controller_1 = require("./cotizaciones.controller");
const cotizacion_entity_1 = require("./entities/cotizacion.entity");
const typeorm_1 = require("@nestjs/typeorm");
const ciudadzona_entity_1 = require("../ciudadeszonas/entities/ciudadzona.entity");
const ciudadeszonas_module_1 = require("../ciudadeszonas/ciudadeszonas.module");
const nivelpiso_entity_1 = require("../nivelespisos/entities/nivelpiso.entity");
const nivelespisos_module_1 = require("../nivelespisos/nivelespisos.module");
const orientacion_entity_1 = require("../orientaciones/entities/orientacion.entity");
const orientaciones_module_1 = require("../orientaciones/orientaciones.module");
const tipopared_entity_1 = require("../tiposparedes/entities/tipopared.entity");
const tiposparedes_module_1 = require("../tiposparedes/tiposparedes.module");
const tiposuelo_entity_1 = require("../tipossuelos/entities/tiposuelo.entity");
const tipossuelos_module_1 = require("../tipossuelos/tipossuelos.module");
const tipotecho_entity_1 = require("../tipostechos/entities/tipotecho.entity");
const tipostechos_module_1 = require("../tipostechos/tipostechos.module");
const tipovidrio_entity_1 = require("../tiposvidrios/entities/tipovidrio.entity");
const tiposvidrios_module_1 = require("../tiposvidrios/tiposvidrios.module");
let CotizacionesModule = class CotizacionesModule {
};
exports.CotizacionesModule = CotizacionesModule;
exports.CotizacionesModule = CotizacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cotizacion_entity_1.Cotizacion, ciudadzona_entity_1.Ciudadzona, nivelpiso_entity_1.Nivelpiso, orientacion_entity_1.Orientacion, tipopared_entity_1.Tipopared, tiposuelo_entity_1.Tiposuelo, tipotecho_entity_1.Tipotecho, tipovidrio_entity_1.Tipovidrio]), ciudadeszonas_module_1.CiudadeszonasModule, nivelespisos_module_1.NivelespisosModule, orientaciones_module_1.OrientacionesModule, tiposparedes_module_1.TiposparedesModule, tipossuelos_module_1.TipossuelosModule, tipostechos_module_1.TipostechosModule, tiposvidrios_module_1.TiposvidriosModule],
        controllers: [cotizaciones_controller_1.CotizacionesController],
        providers: [cotizaciones_service_1.CotizacionesService],
        exports: [typeorm_1.TypeOrmModule, cotizaciones_service_1.CotizacionesService],
    })
], CotizacionesModule);
//# sourceMappingURL=cotizaciones.module.js.map