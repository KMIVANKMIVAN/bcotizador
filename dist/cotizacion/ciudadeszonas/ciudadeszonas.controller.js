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
exports.CiudadeszonasController = void 0;
const common_1 = require("@nestjs/common");
const ciudadeszonas_service_1 = require("./ciudadeszonas.service");
const create_ciudadzona_dto_1 = require("./dto/create-ciudadzona.dto");
const update_ciudadzona_dto_1 = require("./dto/update-ciudadzona.dto");
let CiudadeszonasController = class CiudadeszonasController {
    constructor(ciudadeszonasService) {
        this.ciudadeszonasService = ciudadeszonasService;
    }
    create(createCiudadzonaDto) {
        return this.ciudadeszonasService.create(createCiudadzonaDto);
    }
    findAll() {
        return this.ciudadeszonasService.findAll();
    }
    findOne(id) {
        return this.ciudadeszonasService.findOne(+id);
    }
    update(id, updateCiudadzonaDto) {
        return this.ciudadeszonasService.update(+id, updateCiudadzonaDto);
    }
    remove(id) {
        return this.ciudadeszonasService.remove(+id);
    }
};
exports.CiudadeszonasController = CiudadeszonasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ciudadzona_dto_1.CreateCiudadzonaDto]),
    __metadata("design:returntype", void 0)
], CiudadeszonasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadeszonasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CiudadeszonasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ciudadzona_dto_1.UpdateCiudadzonaDto]),
    __metadata("design:returntype", void 0)
], CiudadeszonasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CiudadeszonasController.prototype, "remove", null);
exports.CiudadeszonasController = CiudadeszonasController = __decorate([
    (0, common_1.Controller)('ciudadeszonas'),
    __metadata("design:paramtypes", [ciudadeszonas_service_1.CiudadeszonasService])
], CiudadeszonasController);
//# sourceMappingURL=ciudadeszonas.controller.js.map