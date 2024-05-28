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
exports.CargosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cargo_entity_1 = require("./entities/cargo.entity");
const unidades_service_1 = require("../unidades/unidades.service");
let CargosService = class CargosService {
    constructor(cargoRepository, unidadesService) {
        this.cargoRepository = cargoRepository;
        this.unidadesService = unidadesService;
    }
    async create(createCargoDto) {
        try {
            const buscarUnidades = await this.unidadesService.findOne(createCargoDto.unidad_id);
            const { unidad_id, ...cargoDatos } = createCargoDto;
            const nuevoCargo = this.cargoRepository.create({
                ...cargoDatos,
                unidad: buscarUnidades,
            });
            return await this.cargoRepository.save(nuevoCargo);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "cargos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const cargos = await this.cargoRepository.find({ relations: ['unidad'] });
            if (!cargos || cargos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Cargos`,
                });
            }
            return cargos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "cargos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const cargo = await this.cargoRepository.findOne({
                where: { id },
                relations: ['unidad'],
            });
            if (!cargo) {
                throw new common_1.NotFoundException({
                    message: `Cargo con ID: ${id} no fue encontrada`,
                });
            }
            return cargo;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "cargos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateCargoDto) {
        try {
            console.log(updateCargoDto);
            const existeCargo = await this.findOne(id);
            const buscarUnidad = await this.unidadesService.findOne(updateCargoDto.unidad_id);
            const actualizarCargo = await this.cargoRepository.preload({
                id,
                ...updateCargoDto,
            });
            actualizarCargo.unidad = buscarUnidad;
            return await this.cargoRepository.save(actualizarCargo);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "cargos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const unidad = await this.findOne(id);
            await this.cargoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Cargo con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "cargos"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.CargosService = CargosService;
exports.CargosService = CargosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cargo_entity_1.Cargo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        unidades_service_1.UnidadesService])
], CargosService);
//# sourceMappingURL=cargos.service.js.map