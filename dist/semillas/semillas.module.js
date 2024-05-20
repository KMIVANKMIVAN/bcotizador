"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemillasModule = void 0;
const common_1 = require("@nestjs/common");
const semillas_service_1 = require("./semillas.service");
const semillas_controller_1 = require("./semillas.controller");
const departamentos_module_1 = require("../departamentos/departamentos.module");
const roles_module_1 = require("../roles/roles.module");
const sucursales_module_1 = require("../sucursales/sucursales.module");
const usuarios_module_1 = require("../usuarios/usuarios.module");
const cargos_module_1 = require("../empresa/cargos/cargos.module");
const unidades_module_1 = require("../empresa/unidades/unidades.module");
const direcciones_module_1 = require("../empresa/direcciones/direcciones.module");
const empresas_module_1 = require("../empresa/empresas/empresas.module");
let SemillasModule = class SemillasModule {
};
exports.SemillasModule = SemillasModule;
exports.SemillasModule = SemillasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            departamentos_module_1.DepartamentosModule,
            roles_module_1.RolesModule,
            sucursales_module_1.SucursalesModule,
            usuarios_module_1.UsuariosModule,
            cargos_module_1.CargosModule,
            unidades_module_1.UnidadesModule,
            direcciones_module_1.DireccionesModule,
            empresas_module_1.EmpresasModule
        ],
        controllers: [semillas_controller_1.SemillasController],
        providers: [semillas_service_1.SemillasService],
    })
], SemillasModule);
//# sourceMappingURL=semillas.module.js.map