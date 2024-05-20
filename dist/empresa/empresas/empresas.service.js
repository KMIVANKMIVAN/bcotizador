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
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const empresa_entity_1 = require("./entities/empresa.entity");
let EmpresasService = class EmpresasService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(createEmpresaDto) {
        try {
            const nuevaEmpresa = this.empresaRepository.create(createEmpresaDto);
            return await this.empresaRepository.save(nuevaEmpresa);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                statusCode: 500,
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "empresas"`,
                error: error,
            });
        }
    }
    async findAll() {
        try {
            const empresas = await this.empresaRepository.find();
            if (!empresas || empresas.length === 0) {
                throw new common_1.BadRequestException({
                    statusCode: 404,
                    message: `No se encontraron Empresas`,
                });
            }
            return empresas;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "empresas"`,
                    error: error,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const empresa = await this.empresaRepository.findOneBy({ id });
            if (!empresa) {
                throw new common_1.BadRequestException({
                    statusCode: 404,
                    message: `Empresa con ID: ${id} no fue encontrada`,
                });
            }
            return empresa;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "empresas"`,
                    error: error,
                });
            }
        }
    }
    async update(id, updateEmpresaDto) {
        try {
            const existeEmpresa = await this.findOne(id);
            return await this.empresaRepository.save(updateEmpresaDto);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "empresas"`,
                    error: error,
                });
            }
        }
    }
    async remove(id) {
        try {
            const empresa = await this.findOne(id);
            await this.empresaRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó la Empresa con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "empresas"`,
                    error: error,
                });
            }
        }
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmpresasService);
//# sourceMappingURL=empresas.service.js.map