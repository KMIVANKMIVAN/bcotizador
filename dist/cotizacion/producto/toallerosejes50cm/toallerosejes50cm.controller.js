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
exports.Toallerosejes50cmController = void 0;
const common_1 = require("@nestjs/common");
const toallerosejes50cm_service_1 = require("./toallerosejes50cm.service");
const create_toalleroeje50cm_dto_1 = require("./dto/create-toalleroeje50cm.dto");
const update_toalleroeje50cm_dto_1 = require("./dto/update-toalleroeje50cm.dto");
let Toallerosejes50cmController = class Toallerosejes50cmController {
    constructor(toallerosejes50cmService) {
        this.toallerosejes50cmService = toallerosejes50cmService;
    }
    create(createToalleroeje50cmDto) {
        return this.toallerosejes50cmService.create(createToalleroeje50cmDto);
    }
    findAll() {
        return this.toallerosejes50cmService.findAll();
    }
    findAllClear() {
        return this.toallerosejes50cmService.findAllClear();
    }
    findAllPorNombModelo(modelo) {
        return this.toallerosejes50cmService.findAllPorNombModelo(modelo);
    }
    findOne(id) {
        return this.toallerosejes50cmService.findOne(+id);
    }
    update(id, updateToalleroeje50cmDto) {
        return this.toallerosejes50cmService.update(+id, updateToalleroeje50cmDto);
    }
    remove(id) {
        return this.toallerosejes50cmService.remove(+id);
    }
};
exports.Toallerosejes50cmController = Toallerosejes50cmController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_toalleroeje50cm_dto_1.CreateToalleroeje50cmDto]),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('pormodelo/:modelo'),
    __param(0, (0, common_1.Param)('modelo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "findAllPorNombModelo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_toalleroeje50cm_dto_1.UpdateToalleroeje50cmDto]),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Toallerosejes50cmController.prototype, "remove", null);
exports.Toallerosejes50cmController = Toallerosejes50cmController = __decorate([
    (0, common_1.Controller)('toallerosejes50cm'),
    __metadata("design:paramtypes", [toallerosejes50cm_service_1.Toallerosejes50cmService])
], Toallerosejes50cmController);
//# sourceMappingURL=toallerosejes50cm.controller.js.map