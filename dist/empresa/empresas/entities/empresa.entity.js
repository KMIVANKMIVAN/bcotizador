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
exports.Empresa = void 0;
const typeorm_1 = require("typeorm");
const direccion_entity_1 = require("../../direcciones/entities/direccion.entity");
let Empresa = class Empresa {
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Empresa.prototype, "razon_social", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", String)
], Empresa.prototype, "nit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Empresa.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Empresa.prototype, "pagina_web", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 9, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "linea_gratuita", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Empresa.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Empresa.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => direccion_entity_1.Direccion, (direccion) => direccion.empresa),
    __metadata("design:type", Array)
], Empresa.prototype, "direcciones", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)('empresas')
], Empresa);
//# sourceMappingURL=empresa.entity.js.map