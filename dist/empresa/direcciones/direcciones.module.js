"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DireccionesModule = void 0;
const common_1 = require("@nestjs/common");
const direcciones_service_1 = require("./direcciones.service");
const direcciones_controller_1 = require("./direcciones.controller");
const direccion_entity_1 = require("./entities/direccion.entity");
const typeorm_1 = require("@nestjs/typeorm");
const empresas_module_1 = require("../empresas/empresas.module");
const empresa_entity_1 = require("../empresas/entities/empresa.entity");
let DireccionesModule = class DireccionesModule {
};
exports.DireccionesModule = DireccionesModule;
exports.DireccionesModule = DireccionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([direccion_entity_1.Direccion, empresa_entity_1.Empresa]), empresas_module_1.EmpresasModule,],
        controllers: [direcciones_controller_1.DireccionesController],
        providers: [direcciones_service_1.DireccionesService],
        exports: [typeorm_1.TypeOrmModule, direcciones_service_1.DireccionesService],
    })
], DireccionesModule);
//# sourceMappingURL=direcciones.module.js.map