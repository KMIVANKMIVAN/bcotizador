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
const usuario_entity_1 = require("./usuarios/entities/usuario.entity");
const rol_entity_1 = require("./roles/entities/rol.entity");
const sucursal_entity_1 = require("./sucursales/entities/sucursal.entity");
const empresa_entity_1 = require("./empresa/empresas/entities/empresa.entity");
const unidade_entity_1 = require("./empresa/unidades/entities/unidade.entity");
const cargo_entity_1 = require("./empresa/cargos/entities/cargo.entity");
const direccion_entity_1 = require("./empresa/direcciones/entities/direccion.entity");
const ciudad_entity_1 = require("./ciudades/entities/ciudad.entity");
const ciudadzona_entity_1 = require("./cotizacion/ciudadeszonas/entities/ciudadzona.entity");
const cotizacion_entity_1 = require("./cotizacion/cotizaciones/entities/cotizacion.entity");
const nivelpiso_entity_1 = require("./cotizacion/nivelespisos/entities/nivelpiso.entity");
const tipopared_entity_1 = require("./cotizacion/tiposparedes/entities/tipopared.entity");
const tiposuelo_entity_1 = require("./cotizacion/tipossuelos/entities/tiposuelo.entity");
const tipotecho_entity_1 = require("./cotizacion/tipostechos/entities/tipotecho.entity");
const orientacion_entity_1 = require("./cotizacion/orientaciones/entities/orientacion.entity");
const tipovidrio_entity_1 = require("./cotizacion/tiposvidrios/entities/tipovidrio.entity");
const tipocotizacion_entity_1 = require("./cotizacion/tiposcotizaciones/entities/tipocotizacion.entity");
const gastopersona_entity_1 = require("./cotizacion/gastospersonas/entities/gastopersona.entity");
const factorviaje_entity_1 = require("./cotizacion/factoresviajes/entities/factorviaje.entity");
const toalleroeje50cm_entity_1 = require("./cotizacion/producto/toallerosejes50cm/entities/toalleroeje50cm.entity");
const radiadoreje50cm_entity_1 = require("./cotizacion/producto/radiadoresejes50cm/entities/radiadoreje50cm.entity");
const instalradiatoallero_entity_1 = require("./cotizacion/tiempos/instalradiatoalleros/entities/instalradiatoallero.entity");
const instaltuberia_entity_1 = require("./cotizacion/tiempos/instaltuberias/entities/instaltuberia.entity");
const auth_module_1 = require("./auth/auth.module");
const empresas_module_1 = require("./empresa/empresas/empresas.module");
const direcciones_module_1 = require("./empresa/direcciones/direcciones.module");
const cargos_module_1 = require("./empresa/cargos/cargos.module");
const unidades_module_1 = require("./empresa/unidades/unidades.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const roles_module_1 = require("./roles/roles.module");
const sucursales_module_1 = require("./sucursales/sucursales.module");
const semillas_module_1 = require("./semillas/semillas.module");
const ciudades_module_1 = require("./ciudades/ciudades.module");
const ciudadeszonas_module_1 = require("./cotizacion/ciudadeszonas/ciudadeszonas.module");
const tiposparedes_module_1 = require("./cotizacion/tiposparedes/tiposparedes.module");
const nivelespisos_module_1 = require("./cotizacion/nivelespisos/nivelespisos.module");
const orientaciones_module_1 = require("./cotizacion/orientaciones/orientaciones.module");
const tiposvidrios_module_1 = require("./cotizacion/tiposvidrios/tiposvidrios.module");
const tipostechos_module_1 = require("./cotizacion/tipostechos/tipostechos.module");
const tipossuelos_module_1 = require("./cotizacion/tipossuelos/tipossuelos.module");
const cotizaciones_module_1 = require("./cotizacion/cotizaciones/cotizaciones.module");
const semillacotizacion_module_1 = require("./semillacotizacion/semillacotizacion.module");
const tiposcotizaciones_module_1 = require("./cotizacion/tiposcotizaciones/tiposcotizaciones.module");
const pdfs_module_1 = require("./pdfs/pdfs.module");
const gastospersonas_module_1 = require("./cotizacion/gastospersonas/gastospersonas.module");
const factoresviajes_module_1 = require("./cotizacion/factoresviajes/factoresviajes.module");
const toallerosejes50cm_module_1 = require("./cotizacion/producto/toallerosejes50cm/toallerosejes50cm.module");
const radiadoresejes50cm_module_1 = require("./cotizacion/producto/radiadoresejes50cm/radiadoresejes50cm.module");
const instaltuberias_module_1 = require("./cotizacion/tiempos/instaltuberias/instaltuberias.module");
const instalradiatoalleros_module_1 = require("./cotizacion/tiempos/instalradiatoalleros/instalradiatoalleros.module");
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
            ciudades_module_1.CiudadesModule,
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
                    entities: [
                        usuario_entity_1.Usuario, rol_entity_1.Rol, ciudad_entity_1.Ciudad, sucursal_entity_1.Sucursal, empresa_entity_1.Empresa,
                        unidade_entity_1.Unidad, cargo_entity_1.Cargo, direccion_entity_1.Direccion, ciudadzona_entity_1.Ciudadzona, cotizacion_entity_1.Cotizacion,
                        nivelpiso_entity_1.Nivelpiso, tipopared_entity_1.Tipopared, tiposuelo_entity_1.Tiposuelo, tipotecho_entity_1.Tipotecho, orientacion_entity_1.Orientacion,
                        tipovidrio_entity_1.Tipovidrio, tipocotizacion_entity_1.Tipocotizacion, gastopersona_entity_1.Gastopersona, factorviaje_entity_1.Factorviaje,
                        toalleroeje50cm_entity_1.Toalleroeje50cm, radiadoreje50cm_entity_1.Radiadoreje50cm, instalradiatoallero_entity_1.Instalradiatoallero,
                        instaltuberia_entity_1.Instaltuberia
                    ],
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
            ciudades_module_1.CiudadesModule,
            ciudadeszonas_module_1.CiudadeszonasModule,
            tiposparedes_module_1.TiposparedesModule,
            nivelespisos_module_1.NivelespisosModule,
            orientaciones_module_1.OrientacionesModule,
            tiposvidrios_module_1.TiposvidriosModule,
            tipostechos_module_1.TipostechosModule,
            tipossuelos_module_1.TipossuelosModule,
            cotizaciones_module_1.CotizacionesModule,
            semillacotizacion_module_1.SemillacotizacionModule,
            tiposcotizaciones_module_1.TiposcotizacionesModule,
            pdfs_module_1.PdfsModule,
            gastospersonas_module_1.GastospersonasModule,
            factoresviajes_module_1.FactoresviajesModule,
            toallerosejes50cm_module_1.Toallerosejes50cmModule,
            radiadoresejes50cm_module_1.Radiadoresejes50cmModule,
            instaltuberias_module_1.InstaltuberiasModule,
            instalradiatoalleros_module_1.InstalradiatoallerosModule,
        ],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map