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
exports.Cotizacionambiente = void 0;
const typeorm_1 = require("typeorm");
const cotizacion_entity_1 = require("../../cotizaciones/entities/cotizacion.entity");
let Cotizacionambiente = class Cotizacionambiente {
};
exports.Cotizacionambiente = Cotizacionambiente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Cotizacionambiente.prototype, "nombreambiente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "volumen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "altura", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "nrocelda", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "nroradiador", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Cotizacionambiente.prototype, "nroventana", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cotizacion_entity_1.Cotizacion, (cotizacion) => cotizacion.cotizacionesambientes),
    (0, typeorm_1.JoinColumn)({ name: 'cotizacion_id' }),
    __metadata("design:type", cotizacion_entity_1.Cotizacion)
], Cotizacionambiente.prototype, "cotizacion", void 0);
exports.Cotizacionambiente = Cotizacionambiente = __decorate([
    (0, typeorm_1.Entity)('cotizacionesambientes')
], Cotizacionambiente);
//# sourceMappingURL=cotizacionambiente.entity.js.map