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
exports.TiposcotizacionesController = void 0;
const common_1 = require("@nestjs/common");
const tiposcotizaciones_service_1 = require("./tiposcotizaciones.service");
const create_tipocotizacion_dto_1 = require("./dto/create-tipocotizacion.dto");
const update_tipocotizacion_dto_1 = require("./dto/update-tipocotizacion.dto");
let TiposcotizacionesController = class TiposcotizacionesController {
    constructor(tiposcotizacionesService) {
        this.tiposcotizacionesService = tiposcotizacionesService;
    }
    create(createTipocotizacionDto) {
        return this.tiposcotizacionesService.create(createTipocotizacionDto);
    }
    findAll() {
        return this.tiposcotizacionesService.findAll();
    }
    findAllPorNombTipoCotiz(tipocotizacion) {
        return this.tiposcotizacionesService.findAllPorNombTipoCotiz(tipocotizacion);
    }
    findAllClear() {
        return this.tiposcotizacionesService.findAllClear();
    }
    findOne(id) {
        return this.tiposcotizacionesService.findOne(+id);
    }
    update(id, updateTipocotizacionDto) {
        return this.tiposcotizacionesService.update(+id, updateTipocotizacionDto);
    }
    remove(id) {
        return this.tiposcotizacionesService.remove(+id);
    }
};
exports.TiposcotizacionesController = TiposcotizacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipocotizacion_dto_1.CreateTipocotizacionDto]),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('portipocotiz/:tipocotizacion'),
    __param(0, (0, common_1.Param)('tipocotizacion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "findAllPorNombTipoCotiz", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipocotizacion_dto_1.UpdateTipocotizacionDto]),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiposcotizacionesController.prototype, "remove", null);
exports.TiposcotizacionesController = TiposcotizacionesController = __decorate([
    (0, common_1.Controller)('tiposcotizaciones'),
    __metadata("design:paramtypes", [tiposcotizaciones_service_1.TiposcotizacionesService])
], TiposcotizacionesController);
//# sourceMappingURL=tiposcotizaciones.controller.js.map