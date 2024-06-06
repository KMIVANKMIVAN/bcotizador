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
exports.Unidad = void 0;
const typeorm_1 = require("typeorm");
const direccion_entity_1 = require("../../direcciones/entities/direccion.entity");
const cargo_entity_1 = require("../../cargos/entities/cargo.entity");
let Unidad = class Unidad {
};
exports.Unidad = Unidad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unidad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Unidad.prototype, "unidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Unidad.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => direccion_entity_1.Direccion, (direccion) => direccion.unidades),
    (0, typeorm_1.JoinColumn)({ name: 'direccion_id' }),
    __metadata("design:type", direccion_entity_1.Direccion)
], Unidad.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cargo_entity_1.Cargo, (cargo) => cargo.unidad),
    __metadata("design:type", Array)
], Unidad.prototype, "cargos", void 0);
exports.Unidad = Unidad = __decorate([
    (0, typeorm_1.Entity)('unidades')
], Unidad);
//# sourceMappingURL=unidade.entity.js.map