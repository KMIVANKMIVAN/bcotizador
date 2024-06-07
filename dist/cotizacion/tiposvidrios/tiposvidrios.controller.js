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
exports.TiposvidriosController = void 0;
const common_1 = require("@nestjs/common");
const tiposvidrios_service_1 = require("./tiposvidrios.service");
const create_tipovidrio_dto_1 = require("./dto/create-tipovidrio.dto");
const update_tipovidrio_dto_1 = require("./dto/update-tipovidrio.dto");
let TiposvidriosController = class TiposvidriosController {
    constructor(tiposvidriosService) {
        this.tiposvidriosService = tiposvidriosService;
    }
    create(createTipovidrioDto) {
        return this.tiposvidriosService.create(createTipovidrioDto);
    }
    findAll() {
        return this.tiposvidriosService.findAll();
    }
    findAllPorNombTipoVidrio(tipovidrio) {
        return this.tiposvidriosService.findAllPorNombTipoVidrio(tipovidrio);
    }
    findAllClear() {
        return this.tiposvidriosService.findAllClear();
    }
    findOne(id) {
        return this.tiposvidriosService.findOne(+id);
    }
    update(id, updateTipovidrioDto) {
        return this.tiposvidriosService.update(+id, updateTipovidrioDto);
    }
    remove(id) {
        return this.tiposvidriosService.remove(+id);
    }
};
exports.TiposvidriosController = TiposvidriosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipovidrio_dto_1.CreateTipovidrioDto]),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('portipovidrio/:tipovidrio'),
    __param(0, (0, common_1.Param)('tipovidrio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "findAllPorNombTipoVidrio", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipovidrio_dto_1.UpdateTipovidrioDto]),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposvidriosController.prototype, "remove", null);
exports.TiposvidriosController = TiposvidriosController = __decorate([
    (0, common_1.Controller)('tiposvidrios'),
    __metadata("design:paramtypes", [tiposvidrios_service_1.TiposvidriosService])
], TiposvidriosController);
//# sourceMappingURL=tiposvidrios.controller.js.map