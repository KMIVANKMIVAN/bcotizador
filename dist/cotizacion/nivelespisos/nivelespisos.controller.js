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
exports.NivelespisosController = void 0;
const common_1 = require("@nestjs/common");
const nivelespisos_service_1 = require("./nivelespisos.service");
const create_nivelpiso_dto_1 = require("./dto/create-nivelpiso.dto");
const update_nivelpiso_dto_1 = require("./dto/update-nivelpiso.dto");
let NivelespisosController = class NivelespisosController {
    constructor(nivelespisosService) {
        this.nivelespisosService = nivelespisosService;
    }
    create(createNivelpisoDto) {
        return this.nivelespisosService.create(createNivelpisoDto);
    }
    findAll() {
        return this.nivelespisosService.findAll();
    }
    findAllClear() {
        return this.nivelespisosService.findAllClear();
    }
    findAllPorNombNivelPiso(nivelpiso) {
        return this.nivelespisosService.findAllPorNombNivelPiso(nivelpiso);
    }
    findOne(id) {
        return this.nivelespisosService.findOne(+id);
    }
    update(id, updateNivelpisoDto) {
        return this.nivelespisosService.update(+id, updateNivelpisoDto);
    }
    remove(id) {
        return this.nivelespisosService.remove(+id);
    }
};
exports.NivelespisosController = NivelespisosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nivelpiso_dto_1.CreateNivelpisoDto]),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('pornivelpiso/:nivelpiso'),
    __param(0, (0, common_1.Param)('nivelpiso')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "findAllPorNombNivelPiso", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_nivelpiso_dto_1.UpdateNivelpisoDto]),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NivelespisosController.prototype, "remove", null);
exports.NivelespisosController = NivelespisosController = __decorate([
    (0, common_1.Controller)('nivelespisos'),
    __metadata("design:paramtypes", [nivelespisos_service_1.NivelespisosService])
], NivelespisosController);
//# sourceMappingURL=nivelespisos.controller.js.map