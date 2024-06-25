"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toallerosejes50cmModule = void 0;
const common_1 = require("@nestjs/common");
const toallerosejes50cm_service_1 = require("./toallerosejes50cm.service");
const toallerosejes50cm_controller_1 = require("./toallerosejes50cm.controller");
const toalleroeje50cm_entity_1 = require("./entities/toalleroeje50cm.entity");
const typeorm_1 = require("@nestjs/typeorm");
let Toallerosejes50cmModule = class Toallerosejes50cmModule {
};
exports.Toallerosejes50cmModule = Toallerosejes50cmModule;
exports.Toallerosejes50cmModule = Toallerosejes50cmModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([toalleroeje50cm_entity_1.Toalleroeje50cm])],
        controllers: [toallerosejes50cm_controller_1.Toallerosejes50cmController],
        providers: [toallerosejes50cm_service_1.Toallerosejes50cmService],
        exports: [typeorm_1.TypeOrmModule, toallerosejes50cm_service_1.Toallerosejes50cmService],
    })
], Toallerosejes50cmModule);
//# sourceMappingURL=toallerosejes50cm.module.js.map