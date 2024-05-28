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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
let RolesService = class RolesService {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async create(createRoleDto) {
        try {
            const nuevoRol = this.rolRepository.create(createRoleDto);
            return await this.rolRepository.save(nuevoRol);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "roles"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const roles = await this.rolRepository.find();
            if (!roles || roles.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Empresas`,
                });
            }
            return roles;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "roles"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const rol = await this.rolRepository.findOneBy({ id });
            if (!rol) {
                throw new common_1.NotFoundException({
                    message: `Rol con ID: ${id} no fue encontrada`,
                });
            }
            return rol;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "roles"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findByIds(ids) {
        try {
            const roles = await this.rolRepository.findByIds(ids);
            if (!roles) {
                throw new common_1.NotFoundException({
                    message: `Roles con IDs ${ids} no fueron encontrados`
                });
            }
            if (roles.length === 0) {
                throw new common_1.NotFoundException({
                    message: `Roles con IDs ${ids} no fueron encontrados`
                });
            }
            return roles;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findByIds) de la ruta "roles"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateRoleDto) {
        try {
            const existeRole = await this.findOne(id);
            return await this.rolRepository.save(updateRoleDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "roles"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const rol = await this.findOne(id);
            await this.rolRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Rol con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "roles"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map