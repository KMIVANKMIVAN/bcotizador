"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiadoresejes50cmModule = void 0;
const common_1 = require("@nestjs/common");
const radiadoresejes50cm_service_1 = require("./radiadoresejes50cm.service");
const radiadoresejes50cm_controller_1 = require("./radiadoresejes50cm.controller");
const radiadoreje50cm_entity_1 = require("./entities/radiadoreje50cm.entity");
const typeorm_1 = require("@nestjs/typeorm");
let Radiadoresejes50cmModule = class Radiadoresejes50cmModule {
};
exports.Radiadoresejes50cmModule = Radiadoresejes50cmModule;
exports.Radiadoresejes50cmModule = Radiadoresejes50cmModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([radiadoreje50cm_entity_1.Radiadoreje50cm])],
        controllers: [radiadoresejes50cm_controller_1.Radiadoresejes50cmController],
        providers: [radiadoresejes50cm_service_1.Radiadoresejes50cmService],
        exports: [typeorm_1.TypeOrmModule, radiadoresejes50cm_service_1.Radiadoresejes50cmService],
    })
], Radiadoresejes50cmModule);
//# sourceMappingURL=radiadoresejes50cm.module.js.map