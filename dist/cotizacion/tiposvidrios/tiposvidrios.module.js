"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposvidriosModule = void 0;
const common_1 = require("@nestjs/common");
const tiposvidrios_service_1 = require("./tiposvidrios.service");
const tiposvidrios_controller_1 = require("./tiposvidrios.controller");
const tipovidrio_entity_1 = require("./entities/tipovidrio.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TiposvidriosModule = class TiposvidriosModule {
};
exports.TiposvidriosModule = TiposvidriosModule;
exports.TiposvidriosModule = TiposvidriosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipovidrio_entity_1.Tipovidrio])],
        controllers: [tiposvidrios_controller_1.TiposvidriosController],
        providers: [tiposvidrios_service_1.TiposvidriosService],
        exports: [typeorm_1.TypeOrmModule, tiposvidrios_service_1.TiposvidriosService],
    })
], TiposvidriosModule);
//# sourceMappingURL=tiposvidrios.module.js.map