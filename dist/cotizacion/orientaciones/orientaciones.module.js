"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrientacionesModule = void 0;
const common_1 = require("@nestjs/common");
const orientaciones_service_1 = require("./orientaciones.service");
const orientaciones_controller_1 = require("./orientaciones.controller");
const orientacion_entity_1 = require("./entities/orientacion.entity");
const typeorm_1 = require("@nestjs/typeorm");
let OrientacionesModule = class OrientacionesModule {
};
exports.OrientacionesModule = OrientacionesModule;
exports.OrientacionesModule = OrientacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([orientacion_entity_1.Orientacion])],
        controllers: [orientaciones_controller_1.OrientacionesController],
        providers: [orientaciones_service_1.OrientacionesService],
        exports: [typeorm_1.TypeOrmModule, orientaciones_service_1.OrientacionesService],
    })
], OrientacionesModule);
//# sourceMappingURL=orientaciones.module.js.map