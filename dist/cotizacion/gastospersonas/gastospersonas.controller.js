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
exports.GastospersonasController = void 0;
const common_1 = require("@nestjs/common");
const gastospersonas_service_1 = require("./gastospersonas.service");
const create_gastopersona_dto_1 = require("./dto/create-gastopersona.dto");
const update_gastopersona_dto_1 = require("./dto/update-gastopersona.dto");
let GastospersonasController = class GastospersonasController {
    constructor(gastospersonasService) {
        this.gastospersonasService = gastospersonasService;
    }
    create(createGastospersonaDto) {
        return this.gastospersonasService.create(createGastospersonaDto);
    }
    findAll() {
        return this.gastospersonasService.findAll();
    }
    findAllClear() {
        return this.gastospersonasService.findAllClear();
    }
    findAllPorNombNivelPiso(nropersona) {
        return this.gastospersonasService.findAllPorNroPersona(nropersona);
    }
    findOne(id) {
        return this.gastospersonasService.findOne(+id);
    }
    update(id, updateGastospersonaDto) {
        return this.gastospersonasService.update(+id, updateGastospersonaDto);
    }
    remove(id) {
        return this.gastospersonasService.remove(+id);
    }
};
exports.GastospersonasController = GastospersonasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gastopersona_dto_1.CreateGastopersonaDto]),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('pornropersona/:nropersona'),
    __param(0, (0, common_1.Param)('nropersona')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "findAllPorNombNivelPiso", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_gastopersona_dto_1.UpdateGastopersonaDto]),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GastospersonasController.prototype, "remove", null);
exports.GastospersonasController = GastospersonasController = __decorate([
    (0, common_1.Controller)('gastospersonas'),
    __metadata("design:paramtypes", [gastospersonas_service_1.GastospersonasService])
], GastospersonasController);
//# sourceMappingURL=gastospersonas.controller.js.map