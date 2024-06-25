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
exports.InstaltuberiasController = void 0;
const common_1 = require("@nestjs/common");
const instaltuberias_service_1 = require("./instaltuberias.service");
const create_instaltuberia_dto_1 = require("./dto/create-instaltuberia.dto");
const update_instaltuberia_dto_1 = require("./dto/update-instaltuberia.dto");
let InstaltuberiasController = class InstaltuberiasController {
    constructor(instaltuberiasService) {
        this.instaltuberiasService = instaltuberiasService;
    }
    create(createInstaltuberiaDto) {
        return this.instaltuberiasService.create(createInstaltuberiaDto);
    }
    findAll() {
        return this.instaltuberiasService.findAll();
    }
    findAllClear() {
        return this.instaltuberiasService.findAllClear();
    }
    findAllPorRango(rango) {
        return this.instaltuberiasService.findAllPorRango(rango);
    }
    findOne(id) {
        return this.instaltuberiasService.findOne(+id);
    }
    update(id, updateInstaltuberiaDto) {
        return this.instaltuberiasService.update(+id, updateInstaltuberiaDto);
    }
    remove(id) {
        return this.instaltuberiasService.remove(+id);
    }
};
exports.InstaltuberiasController = InstaltuberiasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instaltuberia_dto_1.CreateInstaltuberiaDto]),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('porrango/:rango'),
    __param(0, (0, common_1.Param)('rango')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "findAllPorRango", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_instaltuberia_dto_1.UpdateInstaltuberiaDto]),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstaltuberiasController.prototype, "remove", null);
exports.InstaltuberiasController = InstaltuberiasController = __decorate([
    (0, common_1.Controller)('instaltuberias'),
    __metadata("design:paramtypes", [instaltuberias_service_1.InstaltuberiasService])
], InstaltuberiasController);
//# sourceMappingURL=instaltuberias.controller.js.map