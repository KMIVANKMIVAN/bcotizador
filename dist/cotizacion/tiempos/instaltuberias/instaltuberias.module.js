"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstaltuberiasModule = void 0;
const common_1 = require("@nestjs/common");
const instaltuberias_service_1 = require("./instaltuberias.service");
const instaltuberias_controller_1 = require("./instaltuberias.controller");
const instaltuberia_entity_1 = require("./entities/instaltuberia.entity");
const typeorm_1 = require("@nestjs/typeorm");
let InstaltuberiasModule = class InstaltuberiasModule {
};
exports.InstaltuberiasModule = InstaltuberiasModule;
exports.InstaltuberiasModule = InstaltuberiasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instaltuberia_entity_1.Instaltuberia])],
        controllers: [instaltuberias_controller_1.InstaltuberiasController],
        providers: [instaltuberias_service_1.InstaltuberiasService],
        exports: [typeorm_1.TypeOrmModule, instaltuberias_service_1.InstaltuberiasService],
    })
], InstaltuberiasModule);
//# sourceMappingURL=instaltuberias.module.js.map