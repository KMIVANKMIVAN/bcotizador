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
exports.SemillasController = void 0;
const common_1 = require("@nestjs/common");
const semillas_service_1 = require("./semillas.service");
const public_decorator_1 = require("../auth/public.decorator");
let SemillasController = class SemillasController {
    constructor(semillasService) {
        this.semillasService = semillasService;
    }
    ejecutarSemilla() {
        return this.semillasService.ejecutarSemilla();
    }
};
exports.SemillasController = SemillasController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('ejecutarsemilla'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SemillasController.prototype, "ejecutarSemilla", null);
exports.SemillasController = SemillasController = __decorate([
    (0, common_1.Controller)('semillas'),
    __metadata("design:paramtypes", [semillas_service_1.SemillasService])
], SemillasController);
//# sourceMappingURL=semillas.controller.js.map