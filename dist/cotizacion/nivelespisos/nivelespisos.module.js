"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivelespisosModule = void 0;
const common_1 = require("@nestjs/common");
const nivelespisos_service_1 = require("./nivelespisos.service");
const nivelespisos_controller_1 = require("./nivelespisos.controller");
const nivelpiso_entity_1 = require("./entities/nivelpiso.entity");
const typeorm_1 = require("@nestjs/typeorm");
let NivelespisosModule = class NivelespisosModule {
};
exports.NivelespisosModule = NivelespisosModule;
exports.NivelespisosModule = NivelespisosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([nivelpiso_entity_1.Nivelpiso])],
        controllers: [nivelespisos_controller_1.NivelespisosController],
        providers: [nivelespisos_service_1.NivelespisosService],
        exports: [typeorm_1.TypeOrmModule, nivelespisos_service_1.NivelespisosService],
    })
], NivelespisosModule);
//# sourceMappingURL=nivelespisos.module.js.map