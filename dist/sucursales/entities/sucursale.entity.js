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
exports.Sucursal = void 0;
const typeorm_1 = require("typeorm");
const departamento_entity_1 = require("../../departamentos/entities/departamento.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Sucursal = class Sucursal {
};
exports.Sucursal = Sucursal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sucursal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Sucursal.prototype, "sucursal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Sucursal.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departamento_entity_1.Departamento, (departamento) => departamento.sucursales),
    (0, typeorm_1.JoinColumn)({ name: 'departamento_id' }),
    __metadata("design:type", departamento_entity_1.Departamento)
], Sucursal.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_entity_1.Usuario, (usuario) => usuario.sucursal),
    __metadata("design:type", Array)
], Sucursal.prototype, "usuarios", void 0);
exports.Sucursal = Sucursal = __decorate([
    (0, typeorm_1.Entity)('sucursales')
], Sucursal);
//# sourceMappingURL=sucursale.entity.js.map