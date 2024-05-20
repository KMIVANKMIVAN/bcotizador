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
exports.Cargo = void 0;
const typeorm_1 = require("typeorm");
const unidade_entity_1 = require("../../unidades/entities/unidade.entity");
const usuario_entity_1 = require("../../../usuarios/entities/usuario.entity");
let Cargo = class Cargo {
};
exports.Cargo = Cargo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cargo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Cargo.prototype, "cargo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Cargo.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unidade_entity_1.Unidad, (unidad) => unidad.cargos),
    (0, typeorm_1.JoinColumn)({ name: 'unidad_id' }),
    __metadata("design:type", unidade_entity_1.Unidad)
], Cargo.prototype, "unidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_entity_1.Usuario, (usuario) => usuario.cargo),
    __metadata("design:type", Array)
], Cargo.prototype, "usuarios", void 0);
exports.Cargo = Cargo = __decorate([
    (0, typeorm_1.Entity)('cargos')
], Cargo);
//# sourceMappingURL=cargo.entity.js.map