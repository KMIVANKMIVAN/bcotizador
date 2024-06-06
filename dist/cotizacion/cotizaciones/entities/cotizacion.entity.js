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
exports.Cotizacion = void 0;
const typeorm_1 = require("typeorm");
const nivelpiso_entity_1 = require("../../nivelespisos/entities/nivelpiso.entity");
const orientacion_entity_1 = require("../../orientaciones/entities/orientacion.entity");
const tipopared_entity_1 = require("../../tiposparedes/entities/tipopared.entity");
const tiposuelo_entity_1 = require("../../tipossuelos/entities/tiposuelo.entity");
const tipotecho_entity_1 = require("../../tipostechos/entities/tipotecho.entity");
const tipovidrio_entity_1 = require("../../tiposvidrios/entities/tipovidrio.entity");
const ciudadzona_entity_1 = require("../../ciudadeszonas/entities/ciudadzona.entity");
const tipocotizacion_entity_1 = require("../../tiposcotizaciones/entities/tipocotizacion.entity");
let Cotizacion = class Cotizacion {
};
exports.Cotizacion = Cotizacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cotizacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 4, nullable: false }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "volumen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "cantidadventana", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ciudadzona_entity_1.Ciudadzona, (ciudadzona) => ciudadzona.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'ciudadzona_id' }),
    __metadata("design:type", ciudadzona_entity_1.Ciudadzona)
], Cotizacion.prototype, "ciudadzona", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nivelpiso_entity_1.Nivelpiso, (nivelpiso) => nivelpiso.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'nivelpiso_id' }),
    __metadata("design:type", nivelpiso_entity_1.Nivelpiso)
], Cotizacion.prototype, "nivelpiso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orientacion_entity_1.Orientacion, (orientacion) => orientacion.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'orientacion_id' }),
    __metadata("design:type", orientacion_entity_1.Orientacion)
], Cotizacion.prototype, "orientacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipopared_entity_1.Tipopared, (tipopared) => tipopared.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'tipopared_id' }),
    __metadata("design:type", tipopared_entity_1.Tipopared)
], Cotizacion.prototype, "tipopared", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tiposuelo_entity_1.Tiposuelo, (tiposuelo) => tiposuelo.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'tiposuelo_id' }),
    __metadata("design:type", tiposuelo_entity_1.Tiposuelo)
], Cotizacion.prototype, "tiposuelo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipotecho_entity_1.Tipotecho, (tipotecho) => tipotecho.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'tipotecho_id' }),
    __metadata("design:type", tipotecho_entity_1.Tipotecho)
], Cotizacion.prototype, "tipotecho", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipovidrio_entity_1.Tipovidrio, (tipovidrio) => tipovidrio.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'tipovidrio_id' }),
    __metadata("design:type", tipovidrio_entity_1.Tipovidrio)
], Cotizacion.prototype, "tipovidrio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipocotizacion_entity_1.Tipocotizacion, (tipocotizacion) => tipocotizacion.cotizaciones),
    (0, typeorm_1.JoinColumn)({ name: 'tipocotizacion_id' }),
    __metadata("design:type", tipocotizacion_entity_1.Tipocotizacion)
], Cotizacion.prototype, "tipocotizacion", void 0);
exports.Cotizacion = Cotizacion = __decorate([
    (0, typeorm_1.Entity)('cotizaciones')
], Cotizacion);
//# sourceMappingURL=cotizacion.entity.js.map