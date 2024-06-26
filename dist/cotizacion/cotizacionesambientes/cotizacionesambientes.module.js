"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionesambientesModule = void 0;
const common_1 = require("@nestjs/common");
const cotizacionesambientes_service_1 = require("./cotizacionesambientes.service");
const cotizacionesambientes_controller_1 = require("./cotizacionesambientes.controller");
const cotizaciones_module_1 = require("../cotizaciones/cotizaciones.module");
const cotizacionambiente_entity_1 = require("./entities/cotizacionambiente.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CotizacionesambientesModule = class CotizacionesambientesModule {
};
exports.CotizacionesambientesModule = CotizacionesambientesModule;
exports.CotizacionesambientesModule = CotizacionesambientesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cotizacionambiente_entity_1.Cotizacionambiente,]), cotizaciones_module_1.CotizacionesModule],
        controllers: [cotizacionesambientes_controller_1.CotizacionesambientesController],
        providers: [cotizacionesambientes_service_1.CotizacionesambientesService],
        exports: [typeorm_1.TypeOrmModule, cotizacionesambientes_service_1.CotizacionesambientesService],
    })
], CotizacionesambientesModule);
//# sourceMappingURL=cotizacionesambientes.module.js.map