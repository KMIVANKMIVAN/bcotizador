"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipostechosModule = void 0;
const common_1 = require("@nestjs/common");
const tipostechos_service_1 = require("./tipostechos.service");
const tipostechos_controller_1 = require("./tipostechos.controller");
const tipotecho_entity_1 = require("./entities/tipotecho.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TipostechosModule = class TipostechosModule {
};
exports.TipostechosModule = TipostechosModule;
exports.TipostechosModule = TipostechosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipotecho_entity_1.Tipotecho])],
        controllers: [tipostechos_controller_1.TipostechosController],
        providers: [tipostechos_service_1.TipostechosService],
        exports: [typeorm_1.TypeOrmModule, tipostechos_service_1.TipostechosService],
    })
], TipostechosModule);
//# sourceMappingURL=tipostechos.module.js.map