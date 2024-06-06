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
exports.TipossuelosController = void 0;
const common_1 = require("@nestjs/common");
const tipossuelos_service_1 = require("./tipossuelos.service");
const create_tiposuelo_dto_1 = require("./dto/create-tiposuelo.dto");
const update_tiposuelo_dto_1 = require("./dto/update-tiposuelo.dto");
let TipossuelosController = class TipossuelosController {
    constructor(tipossuelosService) {
        this.tipossuelosService = tipossuelosService;
    }
    create(createTiposueloDto) {
        return this.tipossuelosService.create(createTiposueloDto);
    }
    findAll() {
        return this.tipossuelosService.findAll();
    }
    findAllClear() {
        return this.tipossuelosService.findAllClear();
    }
    findOne(id) {
        return this.tipossuelosService.findOne(+id);
    }
    update(id, updateTiposueloDto) {
        return this.tipossuelosService.update(+id, updateTiposueloDto);
    }
    remove(id) {
        return this.tipossuelosService.remove(+id);
    }
};
exports.TipossuelosController = TipossuelosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tiposuelo_dto_1.CreateTiposueloDto]),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tiposuelo_dto_1.UpdateTiposueloDto]),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipossuelosController.prototype, "remove", null);
exports.TipossuelosController = TipossuelosController = __decorate([
    (0, common_1.Controller)('tipossuelos'),
    __metadata("design:paramtypes", [tipossuelos_service_1.TipossuelosService])
], TipossuelosController);
//# sourceMappingURL=tipossuelos.controller.js.map