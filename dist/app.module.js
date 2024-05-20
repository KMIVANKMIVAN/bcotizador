"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const core_1 = require("@nestjs/core");
const usuario_entity_1 = require("./usuarios/entities/usuario.entity");
const role_entity_1 = require("./roles/entities/role.entity");
const departamento_entity_1 = require("./departamentos/entities/departamento.entity");
const sucursale_entity_1 = require("./sucursales/entities/sucursale.entity");
const empresa_entity_1 = require("./empresa/empresas/entities/empresa.entity");
const unidade_entity_1 = require("./empresa/unidades/entities/unidade.entity");
const cargo_entity_1 = require("./empresa/cargos/entities/cargo.entity");
const direccione_entity_1 = require("./empresa/direcciones/entities/direccione.entity");
const auth_module_1 = require("./auth/auth.module");
const empresas_module_1 = require("./empresa/empresas/empresas.module");
const direcciones_module_1 = require("./empresa/direcciones/direcciones.module");
const cargos_module_1 = require("./empresa/cargos/cargos.module");
const unidades_module_1 = require("./empresa/unidades/unidades.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const roles_module_1 = require("./roles/roles.module");
const departamentos_module_1 = require("./departamentos/departamentos.module");
const sucursales_module_1 = require("./sucursales/sucursales.module");
const semillas_module_1 = require("./semillas/semillas.module");
const bdType = 'postgres';
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.developer',
            }),
            usuarios_module_1.UsuariosModule,
            roles_module_1.RolesModule,
            departamentos_module_1.DepartamentosModule,
            sucursales_module_1.SucursalesModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: bdType,
                    host: configService.get('BDHOST'),
                    port: configService.get('BDPORT'),
                    username: configService.get('BDUSERNAME'),
                    password: configService.get('BDPASSWORD'),
                    database: configService.get('BDDATABASE'),
                    entities: [usuario_entity_1.Usuario, role_entity_1.Rol, departamento_entity_1.Departamento, sucursale_entity_1.Sucursal, empresa_entity_1.Empresa, unidade_entity_1.Unidad, cargo_entity_1.Cargo, direccione_entity_1.Direccion],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            semillas_module_1.SemillasModule,
            auth_module_1.AuthModule,
            empresas_module_1.EmpresasModule,
            direcciones_module_1.DireccionesModule,
            cargos_module_1.CargosModule,
            unidades_module_1.UnidadesModule,
        ],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map