"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposparedesModule = void 0;
const common_1 = require("@nestjs/common");
const tiposparedes_service_1 = require("./tiposparedes.service");
const tiposparedes_controller_1 = require("./tiposparedes.controller");
const tipopared_entity_1 = require("./entities/tipopared.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TiposparedesModule = class TiposparedesModule {
};
exports.TiposparedesModule = TiposparedesModule;
exports.TiposparedesModule = TiposparedesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipopared_entity_1.Tipopared])],
        controllers: [tiposparedes_controller_1.TiposparedesController],
        providers: [tiposparedes_service_1.TiposparedesService],
        exports: [typeorm_1.TypeOrmModule, tiposparedes_service_1.TiposparedesService],
    })
], TiposparedesModule);
//# sourceMappingURL=tiposparedes.module.js.map