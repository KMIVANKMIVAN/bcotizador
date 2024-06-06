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
exports.TipossuelosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tiposuelo_entity_1 = require("./entities/tiposuelo.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let TipossuelosService = class TipossuelosService {
    constructor(tiposueloRepository) {
        this.tiposueloRepository = tiposueloRepository;
    }
    async createSemilla(createTiposueloDto) {
        try {
            createTiposueloDto.tiposuelo = (0, capitalizeTextos_1.capitalizeTextos)(createTiposueloDto.tiposuelo);
            const nuevoTiposuelo = this.tiposueloRepository.create(createTiposueloDto);
            return await this.tiposueloRepository.save(nuevoTiposuelo);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipossuelos"`,
                error: `${error}`,
            });
        }
    }
    async create(createTiposueloDto) {
        try {
            createTiposueloDto.valor = Number(createTiposueloDto.valor) * 1 / 100;
            createTiposueloDto.tiposuelo = (0, capitalizeTextos_1.capitalizeTextos)(createTiposueloDto.tiposuelo);
            const nuevoTiposuelo = this.tiposueloRepository.create(createTiposueloDto);
            return await this.tiposueloRepository.save(nuevoTiposuelo);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipossuelos"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const tipossuelos = await this.tiposueloRepository.find();
            if (!tipossuelos || tipossuelos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tipossuelos`,
                });
            }
            return tipossuelos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipossuelos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const tipossuelos = await this.tiposueloRepository.find();
            if (!tipossuelos || tipossuelos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tipossuelos`,
                });
            }
            tipossuelos.forEach((tiposuelo) => delete tiposuelo.valor);
            return tipossuelos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipossuelos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const tiposuelo = await this.tiposueloRepository.findOneBy({ id });
            if (!tiposuelo) {
                throw new common_1.NotFoundException({
                    message: `Tiposuelo con ID: ${id} no fue encontrada`,
                });
            }
            return tiposuelo;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tipossuelos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateTiposueloDto) {
        try {
            const existeTiposuelo = await this.findOne(id);
            updateTiposueloDto.tiposuelo = (0, capitalizeTextos_1.capitalizeTextos)(updateTiposueloDto.tiposuelo);
            const actualizarTiposuelo = this.tiposueloRepository.merge(existeTiposuelo, updateTiposueloDto);
            return await this.tiposueloRepository.save(actualizarTiposuelo);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "tipossuelos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const tiposuelo = await this.findOne(id);
            await this.tiposueloRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Tiposuelo con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tipossuelos"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.TipossuelosService = TipossuelosService;
exports.TipossuelosService = TipossuelosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tiposuelo_entity_1.Tiposuelo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipossuelosService);
//# sourceMappingURL=tipossuelos.service.js.map