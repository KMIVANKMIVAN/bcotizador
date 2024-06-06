"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfsController = void 0;
const common_1 = require("@nestjs/common");
const pdfs_service_1 = require("./pdfs.service");
const public_decorator_1 = require("../auth/public.decorator");
let PdfsController = class PdfsController {
    constructor(pdfsService) {
        this.pdfsService = pdfsService;
    }
    async getPdf(res) {
        const pdfBuffer = await this.pdfsService.createPdf();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename=test.pdf',
            'Content-Length': pdfBuffer.length,
        });
        res.end(pdfBuffer);
    }
};
exports.PdfsController = PdfsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PdfsController.prototype, "getPdf", null);
exports.PdfsController = PdfsController = __decorate([
    (0, common_1.Controller)('pdfs'),
    __metadata("design:paramtypes", [pdfs_service_1.PdfsService])
], PdfsController);
//# sourceMappingURL=pdfs.controller.js.map