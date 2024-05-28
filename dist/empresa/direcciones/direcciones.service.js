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
exports.DireccionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const direccione_entity_1 = require("./entities/direccione.entity");
const empresas_service_1 = require("../empresas/empresas.service");
let DireccionesService = class DireccionesService {
    constructor(direccioneRepository, empresasService) {
        this.direccioneRepository = direccioneRepository;
        this.empresasService = empresasService;
    }
    async create(createDireccioneDto) {
        try {
            const buscarEmpresa = await this.empresasService.findOne(createDireccioneDto.empresa_id);
            const { empresa_id, ...direccionDatos } = createDireccioneDto;
            const nuevaDieccion = this.direccioneRepository.create({
                ...direccionDatos,
                empresa: buscarEmpresa,
            });
            return await this.direccioneRepository.save(nuevaDieccion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "direcciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const direcciones = await this.direccioneRepository.find({ relations: ['empresa'] });
            if (!direcciones || direcciones.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Direcciones`,
                });
            }
            return direcciones;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "direcciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const direccion = await this.direccioneRepository.findOne({
                where: { id },
                relations: ['empresa'],
            });
            if (!direccion) {
                throw new common_1.NotFoundException({
                    message: `Direccion con ID: ${id} no fue encontrada`,
                });
            }
            return direccion;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "direcciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateDireccioneDto) {
        try {
            const existeDireccion = await this.findOne(id);
            const buscarEmpresa = await this.empresasService.findOne(updateDireccioneDto.empresa_id);
            const actualizarDireccion = await this.direccioneRepository.preload({
                id,
                ...updateDireccioneDto,
            });
            actualizarDireccion.empresa = buscarEmpresa;
            return await this.direccioneRepository.save(actualizarDireccion);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "direcciones"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const direccion = await this.findOne(id);
            await this.direccioneRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Direccion con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "direcciones"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.DireccionesService = DireccionesService;
exports.DireccionesService = DireccionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(direccione_entity_1.Direccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        empresas_service_1.EmpresasService])
], DireccionesService);
//# sourceMappingURL=direcciones.service.js.map