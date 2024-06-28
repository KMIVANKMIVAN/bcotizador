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
exports.Toalleroeje50cm = void 0;
const typeorm_1 = require("typeorm");
const cotizacion_entity_1 = require("../../../cotizaciones/entities/cotizacion.entity");
let Toalleroeje50cm = class Toalleroeje50cm {
};
exports.Toalleroeje50cm = Toalleroeje50cm;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Toalleroeje50cm.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], Toalleroeje50cm.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 14, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], Toalleroeje50cm.prototype, "potenciawats", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 14, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], Toalleroeje50cm.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 14, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], Toalleroeje50cm.prototype, "preciopaquete", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cotizacion_entity_1.Cotizacion, (cotizacion) => cotizacion.toalleroeje50cm),
    __metadata("design:type", Array)
], Toalleroeje50cm.prototype, "cotizaciones", void 0);
exports.Toalleroeje50cm = Toalleroeje50cm = __decorate([
    (0, typeorm_1.Entity)('toallerosejes50cm')
], Toalleroeje50cm);
//# sourceMappingURL=toalleroeje50cm.entity.js.map