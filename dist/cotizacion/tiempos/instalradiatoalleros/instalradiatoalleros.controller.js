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
exports.InstalradiatoallerosController = void 0;
const common_1 = require("@nestjs/common");
const instalradiatoalleros_service_1 = require("./instalradiatoalleros.service");
const create_instalradiatoallero_dto_1 = require("./dto/create-instalradiatoallero.dto");
const update_instalradiatoallero_dto_1 = require("./dto/update-instalradiatoallero.dto");
let InstalradiatoallerosController = class InstalradiatoallerosController {
    constructor(instalradiatoallerosService) {
        this.instalradiatoallerosService = instalradiatoallerosService;
    }
    create(createInstalradiatoalleroDto) {
        return this.instalradiatoallerosService.create(createInstalradiatoalleroDto);
    }
    findAll() {
        return this.instalradiatoallerosService.findAll();
    }
    findAllClear() {
        return this.instalradiatoallerosService.findAllClear();
    }
    findAllPorNroradiador(nroradiador) {
        return this.instalradiatoallerosService.findAllPorNroradiador(nroradiador);
    }
    findOne(id) {
        return this.instalradiatoallerosService.findOne(+id);
    }
    update(id, updateInstalradiatoalleroDto) {
        return this.instalradiatoallerosService.update(+id, updateInstalradiatoalleroDto);
    }
    remove(id) {
        return this.instalradiatoallerosService.remove(+id);
    }
};
exports.InstalradiatoallerosController = InstalradiatoallerosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instalradiatoallero_dto_1.CreateInstalradiatoalleroDto]),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('svc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "findAllClear", null);
__decorate([
    (0, common_1.Get)('pornroradiador/:nroradiador'),
    __param(0, (0, common_1.Param)('nroradiador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "findAllPorNroradiador", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_instalradiatoallero_dto_1.UpdateInstalradiatoalleroDto]),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InstalradiatoallerosController.prototype, "remove", null);
exports.InstalradiatoallerosController = InstalradiatoallerosController = __decorate([
    (0, common_1.Controller)('instalradiatoalleros'),
    __metadata("design:paramtypes", [instalradiatoalleros_service_1.InstalradiatoallerosService])
], InstalradiatoallerosController);
//# sourceMappingURL=instalradiatoalleros.controller.js.map