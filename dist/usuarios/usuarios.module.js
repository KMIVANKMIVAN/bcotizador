"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosModule = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const usuarios_controller_1 = require("./usuarios.controller");
const usuario_entity_1 = require("./entities/usuario.entity");
const typeorm_1 = require("@nestjs/typeorm");
const sucursales_module_1 = require("../sucursales/sucursales.module");
const roles_module_1 = require("../roles/roles.module");
const cargos_module_1 = require("../empresa/cargos/cargos.module");
const rol_entity_1 = require("../roles/entities/rol.entity");
const sucursal_entity_1 = require("../sucursales/entities/sucursal.entity");
const cargo_entity_1 = require("../empresa/cargos/entities/cargo.entity");
let UsuariosModule = class UsuariosModule {
};
exports.UsuariosModule = UsuariosModule;
exports.UsuariosModule = UsuariosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario, rol_entity_1.Rol, sucursal_entity_1.Sucursal, cargo_entity_1.Cargo]), sucursales_module_1.SucursalesModule, roles_module_1.RolesModule, cargos_module_1.CargosModule],
        controllers: [usuarios_controller_1.UsuariosController],
        providers: [usuarios_service_1.UsuariosService],
        exports: [typeorm_1.TypeOrmModule, usuarios_service_1.UsuariosService],
    })
], UsuariosModule);
//# sourceMappingURL=usuarios.module.js.map