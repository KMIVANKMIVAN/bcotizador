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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const usuario_entity_1 = require("./entities/usuario.entity");
const sucursales_service_1 = require("../sucursales/sucursales.service");
const roles_service_1 = require("../roles/roles.service");
const cargos_service_1 = require("../empresa/cargos/cargos.service");
const class_validator_1 = require("class-validator");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository, rolesService, sucursalesService, cargosService) {
        this.usuarioRepository = usuarioRepository;
        this.rolesService = rolesService;
        this.sucursalesService = sucursalesService;
        this.cargosService = cargosService;
    }
    async createSemilla(createUsuarioDto) {
        try {
            const { roles, sucursal_id, ...userData } = createUsuarioDto;
            const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);
            const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);
            const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);
            const hashedPassword = await bcrypt.hash(userData.contrasenia, 10);
            const usuario = this.usuarioRepository.create({
                ...userData,
                contrasenia: hashedPassword,
                roles: existeRoles,
                sucursal: existeSucursal,
                cargo: existeCargo
            });
            return this.usuarioRepository.save(usuario);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async create(createUsuarioDto) {
        try {
            const errors = await (0, class_validator_1.validate)(createUsuarioDto);
            if (errors.length > 0) {
                throw new common_1.InternalServerErrorException({
                    message: 'Error de validación en los datos proporcionados',
                    errors: errors.map(error => Object.values(error.constraints)),
                });
            }
            const existeRoles = await this.rolesService.findByIds(createUsuarioDto.roles);
            const existeSucursal = await this.sucursalesService.findOne(createUsuarioDto.sucursal_id);
            const existeCargo = await this.cargosService.findOne(createUsuarioDto.cargo_id);
            const hashedPassword = createUsuarioDto.contrasenia === null || createUsuarioDto.contrasenia === undefined ?
                createUsuarioDto.ci : createUsuarioDto.contrasenia;
            const { roles, sucursal_id, ...userData } = createUsuarioDto;
            const hashedPasswordHashed = await bcrypt.hash(hashedPassword, 10);
            const nuevoUsuario = this.usuarioRepository.create({
                ...userData,
                contrasenia: hashedPasswordHashed,
                roles: existeRoles,
                sucursal: existeSucursal,
                cargo: existeCargo
            });
            return this.usuarioRepository.save(nuevoUsuario);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const usuarios = await this.usuarioRepository.find({ relations: ['roles', 'sucursal', 'cargo'] });
            if (!usuarios || usuarios.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Usuarios`,
                });
            }
            usuarios.forEach((user) => delete user.contrasenia);
            return usuarios;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const usuario = await this.usuarioRepository.findOne({
                where: { id },
                relations: ['roles', 'sucursal', 'cargo'],
            });
            if (!usuario) {
                throw new common_1.NotFoundException({
                    message: `Usuario con ID: ${id} no fue encontrado`,
                });
            }
            delete usuario.contrasenia;
            return usuario;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOneCi(ci) {
        try {
            const usuarios = await this.usuarioRepository
                .createQueryBuilder('usuarios')
                .where('usuarios.ci ILIKE :ci', { ci: `%${ci}%` })
                .take(5)
                .getMany();
            if (!usuarios || usuarios.length === 0) {
                throw new common_1.NotFoundException({
                    message: `Usuarios con CI: ${ci} no fue encontrado`,
                });
            }
            usuarios.forEach((user) => delete user.contrasenia);
            return usuarios;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOneCi) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOneByUserCi(ci) {
        try {
            const usuario = await this.usuarioRepository.findOne({
                where: { ci },
                relations: ['roles']
            });
            if (!usuario) {
                throw new common_1.NotFoundException({
                    message: `Usuario con CI: ${ci} no fue encontrado`,
                });
            }
            return usuario;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOneByUserCi) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateUsuarioDto) {
        try {
            const existeUsuario = await this.findOne(id);
            const buscarRoles = await this.rolesService.findByIds(updateUsuarioDto.roles);
            const buscarSucursal = await this.sucursalesService.findOne(updateUsuarioDto.sucursal_id);
            const buscarCargo = await this.cargosService.findOne(updateUsuarioDto.cargo_id);
            existeUsuario.nombres = updateUsuarioDto.nombres;
            existeUsuario.apellidos = updateUsuarioDto.apellidos;
            existeUsuario.ci = updateUsuarioDto.ci;
            existeUsuario.correo = updateUsuarioDto.correo;
            existeUsuario.es_activo = updateUsuarioDto.es_activo;
            existeUsuario.roles = buscarRoles;
            existeUsuario.sucursal = buscarSucursal;
            existeUsuario.cargo = buscarCargo;
            const usuarioActualizado = await this.usuarioRepository.save(existeUsuario);
            return usuarioActualizado;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    error: `Error del Servidor en (update): ${error}`,
                    message: `Error del Servidor en (update): ${error}`,
                });
            }
        }
    }
    async updateContrasenia(id, contraseniaAntigua, updateUsuarioDto) {
        try {
            const existeUsuario = await this.findOne(id);
            const contraseniaCorrecta = await bcrypt.compare(contraseniaAntigua, existeUsuario.contrasenia);
            if (!contraseniaCorrecta) {
                throw new common_1.NotFoundException({
                    statusCode: 400,
                    message: 'La contraseña anterior no es correcta',
                });
            }
            if (!updateUsuarioDto.contrasenia) {
                throw new common_1.NotFoundException({
                    statusCode: 400,
                    message: 'La nueva contraseña no puede estar vacía',
                });
            }
            const hashedPassword = await bcrypt.hash(updateUsuarioDto.contrasenia, 10);
            existeUsuario.contrasenia = hashedPassword;
            existeUsuario.se_cambiado_cntr = true;
            const actualizarUsuario = await this.usuarioRepository.save(existeUsuario);
            delete actualizarUsuario.contrasenia;
            return actualizarUsuario;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (updateContrasenia) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const usuario = await this.findOne(id);
            await this.usuarioRepository.delete(id);
            return { success: true, message: `Se eliminó el usuario con ID: ${id}` };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "usuarios"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService,
        sucursales_service_1.SucursalesService,
        cargos_service_1.CargosService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map