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
exports.DepartamentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const departamento_entity_1 = require("./entities/departamento.entity");
let DepartamentosService = class DepartamentosService {
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }
    async create(createDepartamentoDto) {
        try {
            const nuevoDepartamento = this.departamentoRepository.create(createDepartamentoDto);
            return await this.departamentoRepository.save(nuevoDepartamento);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "departamentos"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const departamentos = await this.departamentoRepository.find();
            if (!departamentos || departamentos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Departamentos`,
                });
            }
            return departamentos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "departamentos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const departamento = await this.departamentoRepository.findOneBy({ id });
            if (!departamento) {
                throw new common_1.NotFoundException({
                    message: `Departamento con ID: ${id} no fue encontrada`,
                });
            }
            return departamento;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "departamentos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateDepartamentoDto) {
        try {
            const existeDepartamento = await this.findOne(id);
            return await this.departamentoRepository.save(updateDepartamentoDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "departamentos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const departamento = await this.findOne(id);
            await this.departamentoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Departamento con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "departamentos"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.DepartamentosService = DepartamentosService;
exports.DepartamentosService = DepartamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartamentosService);
//# sourceMappingURL=departamentos.service.js.map