"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstalradiatoallerosModule = void 0;
const common_1 = require("@nestjs/common");
const instalradiatoalleros_service_1 = require("./instalradiatoalleros.service");
const instalradiatoalleros_controller_1 = require("./instalradiatoalleros.controller");
const instalradiatoallero_entity_1 = require("./entities/instalradiatoallero.entity");
const typeorm_1 = require("@nestjs/typeorm");
let InstalradiatoallerosModule = class InstalradiatoallerosModule {
};
exports.InstalradiatoallerosModule = InstalradiatoallerosModule;
exports.InstalradiatoallerosModule = InstalradiatoallerosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instalradiatoallero_entity_1.Instalradiatoallero])],
        controllers: [instalradiatoalleros_controller_1.InstalradiatoallerosController],
        providers: [instalradiatoalleros_service_1.InstalradiatoallerosService],
        exports: [typeorm_1.TypeOrmModule, instalradiatoalleros_service_1.InstalradiatoallerosService],
    })
], InstalradiatoallerosModule);
//# sourceMappingURL=instalradiatoalleros.module.js.map