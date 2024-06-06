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
exports.TiposparedesController = void 0;
const common_1 = require("@nestjs/common");
const tiposparedes_service_1 = require("./tiposparedes.service");
const create_tipopared_dto_1 = require("./dto/create-tipopared.dto");
const update_tipopared_dto_1 = require("./dto/update-tipopared.dto");
let TiposparedesController = class TiposparedesController {
    constructor(tiposparedesService) {
        this.tiposparedesService = tiposparedesService;
    }
    create(createTipoparedDto) {
        return this.tiposparedesService.create(createTipoparedDto);
    }
    findAll() {
        return this.tiposparedesService.findAll();
    }
    findOne(id) {
        return this.tiposparedesService.findOne(+id);
    }
    update(id, updateTipoparedDto) {
        return this.tiposparedesService.update(+id, updateTipoparedDto);
    }
    remove(id) {
        return this.tiposparedesService.remove(+id);
    }
};
exports.TiposparedesController = TiposparedesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipopared_dto_1.CreateTipoparedDto]),
    __metadata("design:returntype", void 0)
], TiposparedesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposparedesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposparedesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipopared_dto_1.UpdateTipoparedDto]),
    __metadata("design:returntype", void 0)
], TiposparedesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposparedesController.prototype, "remove", null);
exports.TiposparedesController = TiposparedesController = __decorate([
    (0, common_1.Controller)('tiposparedes'),
    __metadata("design:paramtypes", [tiposparedes_service_1.TiposparedesService])
], TiposparedesController);
//# sourceMappingURL=tiposparedes.controller.js.map