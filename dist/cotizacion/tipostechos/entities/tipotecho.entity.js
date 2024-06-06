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
exports.Tipotecho = void 0;
const typeorm_1 = require("typeorm");
const cotizacion_entity_1 = require("../../cotizaciones/entities/cotizacion.entity");
let Tipotecho = class Tipotecho {
};
exports.Tipotecho = Tipotecho;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tipotecho.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Tipotecho.prototype, "tipotecho", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Tipotecho.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cotizacion_entity_1.Cotizacion, (cotizacion) => cotizacion.tipotecho),
    __metadata("design:type", Array)
], Tipotecho.prototype, "cotizaciones", void 0);
exports.Tipotecho = Tipotecho = __decorate([
    (0, typeorm_1.Entity)('tipostechos')
], Tipotecho);
//# sourceMappingURL=tipotecho.entity.js.map