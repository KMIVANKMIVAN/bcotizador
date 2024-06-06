"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemillacotizacionModule = void 0;
const common_1 = require("@nestjs/common");
const semillacotizacion_service_1 = require("./semillacotizacion.service");
const semillacotizacion_controller_1 = require("./semillacotizacion.controller");
const ciudadeszonas_module_1 = require("../cotizacion/ciudadeszonas/ciudadeszonas.module");
const nivelespisos_module_1 = require("../cotizacion/nivelespisos/nivelespisos.module");
const orientaciones_module_1 = require("../cotizacion/orientaciones/orientaciones.module");
const tiposparedes_module_1 = require("../cotizacion/tiposparedes/tiposparedes.module");
const tipossuelos_module_1 = require("../cotizacion/tipossuelos/tipossuelos.module");
const tipostechos_module_1 = require("../cotizacion/tipostechos/tipostechos.module");
const tiposvidrios_module_1 = require("../cotizacion/tiposvidrios/tiposvidrios.module");
let SemillacotizacionModule = class SemillacotizacionModule {
};
exports.SemillacotizacionModule = SemillacotizacionModule;
exports.SemillacotizacionModule = SemillacotizacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ciudadeszonas_module_1.CiudadeszonasModule,
            nivelespisos_module_1.NivelespisosModule,
            orientaciones_module_1.OrientacionesModule,
            tiposparedes_module_1.TiposparedesModule,
            tipossuelos_module_1.TipossuelosModule,
            tipostechos_module_1.TipostechosModule,
            tiposvidrios_module_1.TiposvidriosModule,
        ],
        controllers: [semillacotizacion_controller_1.SemillacotizacionController],
        providers: [semillacotizacion_service_1.SemillacotizacionService],
    })
], SemillacotizacionModule);
//# sourceMappingURL=semillacotizacion.module.js.map