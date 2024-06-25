"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GastospersonasModule = void 0;
const common_1 = require("@nestjs/common");
const gastospersonas_service_1 = require("./gastospersonas.service");
const gastospersonas_controller_1 = require("./gastospersonas.controller");
const gastopersona_entity_1 = require("./entities/gastopersona.entity");
const typeorm_1 = require("@nestjs/typeorm");
let GastospersonasModule = class GastospersonasModule {
};
exports.GastospersonasModule = GastospersonasModule;
exports.GastospersonasModule = GastospersonasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gastopersona_entity_1.Gastopersona])],
        controllers: [gastospersonas_controller_1.GastospersonasController],
        providers: [gastospersonas_service_1.GastospersonasService],
        exports: [typeorm_1.TypeOrmModule, gastospersonas_service_1.GastospersonasService],
    })
], GastospersonasModule);
//# sourceMappingURL=gastospersonas.module.js.map