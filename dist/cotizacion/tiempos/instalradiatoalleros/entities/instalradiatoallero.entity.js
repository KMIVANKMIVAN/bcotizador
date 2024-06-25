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
exports.Instalradiatoallero = void 0;
const typeorm_1 = require("typeorm");
const cotizacion_entity_1 = require("../../../cotizaciones/entities/cotizacion.entity");
let Instalradiatoallero = class Instalradiatoallero {
};
exports.Instalradiatoallero = Instalradiatoallero;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Instalradiatoallero.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Instalradiatoallero.prototype, "nroradiador", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint', nullable: false }),
    __metadata("design:type", Number)
], Instalradiatoallero.prototype, "horas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cotizacion_entity_1.Cotizacion, (cotizacion) => cotizacion.instalradiatoallero),
    __metadata("design:type", Array)
], Instalradiatoallero.prototype, "cotizaciones", void 0);
exports.Instalradiatoallero = Instalradiatoallero = __decorate([
    (0, typeorm_1.Entity)('instalradiatoalleros')
], Instalradiatoallero);
//# sourceMappingURL=instalradiatoallero.entity.js.map