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
exports.FactoresviajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const factorviaje_entity_1 = require("./entities/factorviaje.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let FactoresviajesService = class FactoresviajesService {
    constructor(nivelpisoRepository) {
        this.nivelpisoRepository = nivelpisoRepository;
    }
    async createSemilla(createFactorviajeDto) {
        try {
            createFactorviajeDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(createFactorviajeDto.ciudad);
            const nuevoCiudad = this.nivelpisoRepository.create(createFactorviajeDto);
            return await this.nivelpisoRepository.save(nuevoCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "factoresviajes"`,
                error: `${error}`,
            });
        }
    }
    async create(createFactorviajeDto) {
        try {
            createFactorviajeDto.valor = Number(createFactorviajeDto.valor) * 1 / 100;
            createFactorviajeDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(createFactorviajeDto.ciudad);
            const nuevoCiudad = this.nivelpisoRepository.create(createFactorviajeDto);
            return await this.nivelpisoRepository.save(nuevoCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "factoresviajes"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const factoresviajes = await this.nivelpisoRepository.find();
            if (!factoresviajes || factoresviajes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron factoresviajes`,
                });
            }
            return factoresviajes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNombCiudad(ciudad) {
        try {
            const factoresviajes = await this.nivelpisoRepository.createQueryBuilder('ciudad')
                .where('LOWER(ciudad.ciudad) LIKE LOWER(:ciudad)', { ciudad: `%${ciudad.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!factoresviajes || factoresviajes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron nivel pisos: ${ciudad}`,
                });
            }
            return factoresviajes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombNivelPiso) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const factoresviajes = await this.nivelpisoRepository.find();
            if (!factoresviajes || factoresviajes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron factoresviajes`,
                });
            }
            factoresviajes.forEach((ciudad) => delete ciudad.valor);
            return factoresviajes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const factoresviaje = await this.nivelpisoRepository.findOneBy({ id });
            if (!factoresviaje) {
                throw new common_1.NotFoundException({
                    message: `Factorviaje con ID: ${id} no fue encontrada`,
                });
            }
            return factoresviaje;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateFactorviajeDto) {
        try {
            const existeFactoresviaje = await this.findOne(id);
            updateFactorviajeDto.ciudad = (0, capitalizeTextos_1.capitalizeTextos)(updateFactorviajeDto.ciudad);
            const actualizarCiudad = this.nivelpisoRepository.merge(existeFactoresviaje, updateFactorviajeDto);
            return await this.nivelpisoRepository.save(actualizarCiudad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const factoresviaje = await this.findOne(id);
            await this.nivelpisoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Factorviaje con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "factoresviajes"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.FactoresviajesService = FactoresviajesService;
exports.FactoresviajesService = FactoresviajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(factorviaje_entity_1.Factorviaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FactoresviajesService);
//# sourceMappingURL=factoresviajes.service.js.map