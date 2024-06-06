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
exports.Ciudad = void 0;
const typeorm_1 = require("typeorm");
const sucursal_entity_1 = require("../../sucursales/entities/sucursal.entity");
const ciudadzona_entity_1 = require("../../cotizacion/ciudadeszonas/entities/ciudadzona.entity");
let Ciudad = class Ciudad {
};
exports.Ciudad = Ciudad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Ciudad.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Ciudad.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sucursal_entity_1.Sucursal, (sucursal) => sucursal.ciudad),
    __metadata("design:type", Array)
], Ciudad.prototype, "sucursales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ciudadzona_entity_1.Ciudadzona, (ciudadzona) => ciudadzona.ciudad),
    __metadata("design:type", Array)
], Ciudad.prototype, "ciudadeszonas", void 0);
exports.Ciudad = Ciudad = __decorate([
    (0, typeorm_1.Entity)('ciudades')
], Ciudad);
//# sourceMappingURL=ciudad.entity.js.map