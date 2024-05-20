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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmpresaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEmpresaDto {
}
exports.CreateEmpresaDto = CreateEmpresaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100, { message: 'La longitud maxima es de 100 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "razon_social", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100, { message: 'La longitud maxima es de 100 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "nit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50, { message: 'La longitud maxima es de 50 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "ubicacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50, { message: 'La longitud maxima es de 50 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "pagina_web", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10, { message: 'La longitud maxima es de 10 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(9, { message: 'La longitud maxima es de 9 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "linea_gratuita", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50, { message: 'La longitud maxima es de 50 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "celular", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50, { message: 'La longitud maxima es de 50 caracteres' }),
    __metadata("design:type", String)
], CreateEmpresaDto.prototype, "correo", void 0);
//# sourceMappingURL=create-empresa.dto.js.map