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
exports.SemillasService = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const sucursal_entity_1 = require("../sucursales/entities/sucursal.entity");
const rol_entity_1 = require("../roles/entities/rol.entity");
const ciudad_entity_1 = require("../ciudades/entities/ciudad.entity");
const semilla_datos_1 = require("./datos/semilla-datos");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const sucursales_service_1 = require("../sucursales/sucursales.service");
const roles_service_1 = require("../roles/roles.service");
const ciudades_service_1 = require("../ciudades/ciudades.service");
const cargos_service_1 = require("../empresa/cargos/cargos.service");
const unidades_service_1 = require("../empresa/unidades/unidades.service");
const direcciones_service_1 = require("../empresa/direcciones/direcciones.service");
const empresas_service_1 = require("../empresa/empresas/empresas.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
let SemillasService = class SemillasService {
    constructor(configService, usuarioRepository, sucursaleRepository, ciudadRepository, roleRepository, sucursalesService, ciudadesService, rolesService, usuarioService, cargosService, unidadesService, direccionesService, empresasService) {
        this.configService = configService;
        this.usuarioRepository = usuarioRepository;
        this.sucursaleRepository = sucursaleRepository;
        this.ciudadRepository = ciudadRepository;
        this.roleRepository = roleRepository;
        this.sucursalesService = sucursalesService;
        this.ciudadesService = ciudadesService;
        this.rolesService = rolesService;
        this.usuarioService = usuarioService;
        this.cargosService = cargosService;
        this.unidadesService = unidadesService;
        this.direccionesService = direccionesService;
        this.empresasService = empresasService;
        this.isProd = configService.get('STATE') === 'prod';
    }
    async ejecutarSemilla() {
        try {
            if (this.isProd) {
                throw new common_1.BadRequestException({
                    error: `Error al ejecutar la semilla`,
                    message: `Problemas en la ejecucion de la semilla`,
                });
            }
            await this.eliminarDatabase();
            await this.crearCiudades();
            await this.crearRoles();
            await this.crearEmpresas();
            await this.crearDirecciones();
            await this.crearUnidades();
            await this.crearCargos();
            await this.crearSucursales();
            await this.crearUsuarios();
            return true;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                message: `Error del Servidor. Revisar el metodo (ejecutarSemilla) de la ruta "semillas"`,
                error: error,
            });
        }
    }
    async eliminarDatabase() {
        await this.usuarioRepository
            .createQueryBuilder()
            .delete()
            .where({})
            .execute();
        await this.sucursaleRepository
            .createQueryBuilder()
            .delete()
            .where({})
            .execute();
        await this.ciudadRepository
            .createQueryBuilder()
            .delete()
            .where({})
            .execute();
        await this.roleRepository.createQueryBuilder().delete().where({}).execute();
    }
    async crearCiudades() {
        const ciudades = [];
        for (const ciudad of semilla_datos_1.SEMILLA_CIUDADES) {
            ciudades.push(await this.ciudadesService.createSemilla(ciudad));
        }
        return ciudades[0];
    }
    async crearRoles() {
        const roles = [];
        for (const rol of semilla_datos_1.SEMILLA_ROLES) {
            roles.push(await this.rolesService.create(rol));
        }
        return roles[0];
    }
    async crearEmpresas() {
        const empresas = [];
        for (const empresa of semilla_datos_1.SEMILLA_EMPRESA) {
            empresas.push(await this.empresasService.create(empresa));
        }
        return empresas[0];
    }
    async crearDirecciones() {
        const direcciones = [];
        for (const direccion of semilla_datos_1.SEMILLA_DIRECCION) {
            direcciones.push(await this.direccionesService.create(direccion));
        }
        return direcciones[0];
    }
    async crearUnidades() {
        const unidades = [];
        for (const unidad of semilla_datos_1.SEMILLA_UNIDAD) {
            unidades.push(await this.unidadesService.create(unidad));
        }
        return unidades[0];
    }
    async crearCargos() {
        const cargos = [];
        for (const cargo of semilla_datos_1.SEMILLA_CARGO) {
            cargos.push(await this.cargosService.create(cargo));
        }
        return cargos[0];
    }
    async crearSucursales() {
        const sucursales = [];
        for (const sucursal of semilla_datos_1.SEMILLA_SUCURSAL) {
            sucursales.push(await this.sucursalesService.create(sucursal));
        }
        return sucursales[0];
    }
    async crearUsuarios() {
        const usuarios = [];
        for (const usuario of semilla_datos_1.SEMILLA_USUARIOS) {
            usuarios.push(await this.usuarioService.createSemilla(usuario));
        }
        return usuarios[0];
    }
};
exports.SemillasService = SemillasService;
exports.SemillasService = SemillasService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(sucursal_entity_1.Sucursal)),
    __param(3, (0, typeorm_1.InjectRepository)(ciudad_entity_1.Ciudad)),
    __param(4, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        sucursales_service_1.SucursalesService,
        ciudades_service_1.CiudadesService,
        roles_service_1.RolesService,
        usuarios_service_1.UsuariosService,
        cargos_service_1.CargosService,
        unidades_service_1.UnidadesService,
        direcciones_service_1.DireccionesService,
        empresas_service_1.EmpresasService])
], SemillasService);
//# sourceMappingURL=semillas.service.js.map