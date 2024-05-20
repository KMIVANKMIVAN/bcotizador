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
const sucursale_entity_1 = require("../sucursales/entities/sucursale.entity");
const departamento_entity_1 = require("../departamentos/entities/departamento.entity");
const role_entity_1 = require("../roles/entities/role.entity");
const cargo_entity_1 = require("../empresa/cargos/entities/cargo.entity");
const unidade_entity_1 = require("../empresa/unidades/entities/unidade.entity");
const direccione_entity_1 = require("../empresa/direcciones/entities/direccione.entity");
const empresa_entity_1 = require("../empresa/empresas/entities/empresa.entity");
const semilla_datos_1 = require("./datos/semilla-datos");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const sucursales_service_1 = require("../sucursales/sucursales.service");
const departamentos_service_1 = require("../departamentos/departamentos.service");
const roles_service_1 = require("../roles/roles.service");
const cargos_service_1 = require("../empresa/cargos/cargos.service");
const unidades_service_1 = require("../empresa/unidades/unidades.service");
const direcciones_service_1 = require("../empresa/direcciones/direcciones.service");
const empresas_service_1 = require("../empresa/empresas/empresas.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
let SemillasService = class SemillasService {
    constructor(configService, usuarioRepository, sucursaleRepository, departamentoRepository, roleRepository, sucursalesService, departamentosService, rolesService, usuarioService, cargoRepository, unidadRepository, direccionRepository, empresaRepository, cargosService, unidadesService, direccionesService, empresasService) {
        this.configService = configService;
        this.usuarioRepository = usuarioRepository;
        this.sucursaleRepository = sucursaleRepository;
        this.departamentoRepository = departamentoRepository;
        this.roleRepository = roleRepository;
        this.sucursalesService = sucursalesService;
        this.departamentosService = departamentosService;
        this.rolesService = rolesService;
        this.usuarioService = usuarioService;
        this.cargoRepository = cargoRepository;
        this.unidadRepository = unidadRepository;
        this.direccionRepository = direccionRepository;
        this.empresaRepository = empresaRepository;
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
                    statusCode: 400,
                    error: `Error al ejecutar la semilla`,
                    message: `Problemas en la ejecucion de la semilla`,
                });
            }
            await this.eliminarDatabase();
            await this.crearDepartamentos();
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
                statusCode: 500,
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
        await this.departamentoRepository
            .createQueryBuilder()
            .delete()
            .where({})
            .execute();
        await this.roleRepository.createQueryBuilder().delete().where({}).execute();
    }
    async crearDepartamentos() {
        const departamentos = [];
        for (const departamento of semilla_datos_1.SEMILLA_DEPARTAMENTOS) {
            departamentos.push(await this.departamentosService.create(departamento));
        }
        return departamentos[0];
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
    __param(2, (0, typeorm_1.InjectRepository)(sucursale_entity_1.Sucursal)),
    __param(3, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __param(4, (0, typeorm_1.InjectRepository)(role_entity_1.Rol)),
    __param(9, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __param(10, (0, typeorm_1.InjectRepository)(unidade_entity_1.Unidad)),
    __param(11, (0, typeorm_1.InjectRepository)(direccione_entity_1.Direccion)),
    __param(12, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        sucursales_service_1.SucursalesService,
        departamentos_service_1.DepartamentosService,
        roles_service_1.RolesService,
        usuarios_service_1.UsuariosService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        cargos_service_1.CargosService,
        unidades_service_1.UnidadesService,
        direcciones_service_1.DireccionesService,
        empresas_service_1.EmpresasService])
], SemillasService);
//# sourceMappingURL=semillas.service.js.map