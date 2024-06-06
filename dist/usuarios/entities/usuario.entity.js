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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const rol_entity_1 = require("../../roles/entities/rol.entity");
const sucursal_entity_1 = require("../../sucursales/entities/sucursal.entity");
const cargo_entity_1 = require("../../empresa/cargos/entities/cargo.entity");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, length: 10 }),
    __metadata("design:type", String)
], Usuario.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "es_activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "se_cambiado_cntr", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rol_entity_1.Rol, (rol) => rol.usuarios, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Usuario.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sucursal_entity_1.Sucursal, (sucursal) => sucursal.usuarios),
    (0, typeorm_1.JoinColumn)({ name: 'sucursal_id' }),
    __metadata("design:type", sucursal_entity_1.Sucursal)
], Usuario.prototype, "sucursal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cargo_entity_1.Cargo, (cargo) => cargo.usuarios),
    (0, typeorm_1.JoinColumn)({ name: 'cargo_id' }),
    __metadata("design:type", cargo_entity_1.Cargo)
], Usuario.prototype, "cargo", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map