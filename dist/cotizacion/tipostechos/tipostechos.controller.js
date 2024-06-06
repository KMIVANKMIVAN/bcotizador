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
exports.TipostechosController = void 0;
const common_1 = require("@nestjs/common");
const tipostechos_service_1 = require("./tipostechos.service");
const create_tipotecho_dto_1 = require("./dto/create-tipotecho.dto");
const update_tipotecho_dto_1 = require("./dto/update-tipotecho.dto");
let TipostechosController = class TipostechosController {
    constructor(tipostechosService) {
        this.tipostechosService = tipostechosService;
    }
    create(createTipotechoDto) {
        return this.tipostechosService.create(createTipotechoDto);
    }
    findAll() {
        return this.tipostechosService.findAll();
    }
    findAllClear() {
        return this.tipostechosService.findAllClear();
    }
    findOne(id) {
        return this.tipostechosService.findOne(+id);
    }
    update(id, updateTipotechoDto) {
        return this.tipostechosService.update(+id, updateTipotechoDto);
    }
    remove(id) {
        return this.tipostechosService.remove(+id);
    }
};
exports.TipostechosController = TipostechosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipotecho_dto_1.CreateTipotechoDto]),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipotecho_dto_1.UpdateTipotechoDto]),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipostechosController.prototype, "remove", null);
exports.TipostechosController = TipostechosController = __decorate([
    (0, common_1.Controller)('tipostechos'),
    __metadata("design:paramtypes", [tipostechos_service_1.TipostechosService])
], TipostechosController);
//# sourceMappingURL=tipostechos.controller.js.map