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
exports.Radiadoresejes50cmController = void 0;
const common_1 = require("@nestjs/common");
const radiadoresejes50cm_service_1 = require("./radiadoresejes50cm.service");
const create_radiadoreje50cm_dto_1 = require("./dto/create-radiadoreje50cm.dto");
const update_radiadoreje50cm_dto_1 = require("./dto/update-radiadoreje50cm.dto");
let Radiadoresejes50cmController = class Radiadoresejes50cmController {
    constructor(radiadoresejes50cmService) {
        this.radiadoresejes50cmService = radiadoresejes50cmService;
    }
    create(createRadiadoreje50cmDto) {
        return this.radiadoresejes50cmService.create(createRadiadoreje50cmDto);
    }
    findAll() {
        return this.radiadoresejes50cmService.findAll();
    }
    findAllClear() {
        return this.radiadoresejes50cmService.findAllClear();
    }
    findAllPorNombModelo(modelo) {
        return this.radiadoresejes50cmService.findAllPorNombModelo(modelo);
    }
    findOne(id) {
        return this.radiadoresejes50cmService.findOne(+id);
    }
    update(id, updateRadiadoreje50cmDto) {
        return this.radiadoresejes50cmService.update(+id, updateRadiadoreje50cmDto);
    }
    remove(id) {
        return this.radiadoresejes50cmService.remove(+id);
    }
};
exports.Radiadoresejes50cmController = Radiadoresejes50cmController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_radiadoreje50cm_dto_1.CreateRadiadoreje50cmDto]),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('pormodelo/:modelo'),
    __param(0, (0, common_1.Param)('modelo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "findAllPorNombModelo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_radiadoreje50cm_dto_1.UpdateRadiadoreje50cmDto]),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Radiadoresejes50cmController.prototype, "remove", null);
exports.Radiadoresejes50cmController = Radiadoresejes50cmController = __decorate([
    (0, common_1.Controller)('radiadoresejes50cm'),
    __metadata("design:paramtypes", [radiadoresejes50cm_service_1.Radiadoresejes50cmService])
], Radiadoresejes50cmController);
//# sourceMappingURL=radiadoresejes50cm.controller.js.map