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
exports.SemillacotizacionController = void 0;
const common_1 = require("@nestjs/common");
const semillacotizacion_service_1 = require("./semillacotizacion.service");
const public_decorator_1 = require("../auth/public.decorator");
let SemillacotizacionController = class SemillacotizacionController {
    constructor(semillacotizacionService) {
        this.semillacotizacionService = semillacotizacionService;
    }
    ejecutarSemilla() {
        return this.semillacotizacionService.ejecutarSemillacotizacion();
    }
};
exports.SemillacotizacionController = SemillacotizacionController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('ejecutarsemilla'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemillacotizacionController.prototype, "ejecutarSemilla", null);
exports.SemillacotizacionController = SemillacotizacionController = __decorate([
    (0, common_1.Controller)('semillacotizacion'),
    __metadata("design:paramtypes", [semillacotizacion_service_1.SemillacotizacionService])
], SemillacotizacionController);
//# sourceMappingURL=semillacotizacion.controller.js.map