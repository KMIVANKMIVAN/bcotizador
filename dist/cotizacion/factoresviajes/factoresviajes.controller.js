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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoresviajesController = void 0;
const common_1 = require("@nestjs/common");
const factoresviajes_service_1 = require("./factoresviajes.service");
const create_factorviaje_dto_1 = require("./dto/create-factorviaje.dto");
const update_factorviaje_dto_1 = require("./dto/update-factorviaje.dto");
let FactoresviajesController = class FactoresviajesController {
    constructor(factoresviajesService) {
        this.factoresviajesService = factoresviajesService;
    }
    create(createFactorviajeDto) {
        return this.factoresviajesService.create(createFactorviajeDto);
    }
    findAll() {
        return this.factoresviajesService.findAll();
    }
    findAllClear() {
        return this.factoresviajesService.findAllClear();
    }
    findAllPorNombCiudad(ciudad) {
        return this.factoresviajesService.findAllPorNombCiudad(ciudad);
    }
    findOne(id) {
        return this.factoresviajesService.findOne(+id);
    }
    update(id, updateFactorviajeDto) {
        return this.factoresviajesService.update(+id, updateFactorviajeDto);
    }
    remove(id) {
        return this.factoresviajesService.remove(+id);
    }
};
exports.FactoresviajesController = FactoresviajesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_factorviaje_dto_1.CreateFactorviajeDto]),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('porciudad/:ciudad'),
    __param(0, (0, common_1.Param)('ciudad')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "findAllPorNombCiudad", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_factorviaje_dto_1.UpdateFactorviajeDto]),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FactoresviajesController.prototype, "remove", null);
exports.FactoresviajesController = FactoresviajesController = __decorate([
    (0, common_1.Controller)('factoresviajes'),
    __metadata("design:paramtypes", [factoresviajes_service_1.FactoresviajesService])
], FactoresviajesController);
//# sourceMappingURL=factoresviajes.controller.js.map