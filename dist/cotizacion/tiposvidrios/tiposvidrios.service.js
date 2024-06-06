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
exports.TiposvidriosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipovidrio_entity_1 = require("./entities/tipovidrio.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let TiposvidriosService = class TiposvidriosService {
    constructor(tipovidrioRepository) {
        this.tipovidrioRepository = tipovidrioRepository;
    }
    async createSemilla(createTipovidrioDto) {
        try {
            createTipovidrioDto.tipovidrio = (0, capitalizeTextos_1.capitalizeTextos)(createTipovidrioDto.tipovidrio);
            const nuevoTipovidrio = this.tipovidrioRepository.create(createTipovidrioDto);
            return await this.tipovidrioRepository.save(nuevoTipovidrio);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposvidrios"`,
                error: `${error}`,
            });
        }
    }
    async create(createTipovidrioDto) {
        try {
            createTipovidrioDto.valor = Number(createTipovidrioDto.valor) * 1 / 100;
            createTipovidrioDto.tipovidrio = (0, capitalizeTextos_1.capitalizeTextos)(createTipovidrioDto.tipovidrio);
            const nuevoTipovidrio = this.tipovidrioRepository.create(createTipovidrioDto);
            return await this.tipovidrioRepository.save(nuevoTipovidrio);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposvidrios"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const tiposvidrios = await this.tipovidrioRepository.find();
            if (!tiposvidrios || tiposvidrios.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposvidrios`,
                });
            }
            return tiposvidrios;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposvidrios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const tiposvidrios = await this.tipovidrioRepository.find();
            if (!tiposvidrios || tiposvidrios.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposvidrios`,
                });
            }
            tiposvidrios.forEach((tipovidrio) => delete tipovidrio.valor);
            return tiposvidrios;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposvidrios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const tipovidrio = await this.tipovidrioRepository.findOneBy({ id });
            if (!tipovidrio) {
                throw new common_1.NotFoundException({
                    message: `Tipovidrio con ID: ${id} no fue encontrada`,
                });
            }
            return tipovidrio;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposvidrios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateTipovidrioDto) {
        try {
            const existeTipovidrio = await this.findOne(id);
            updateTipovidrioDto.tipovidrio = (0, capitalizeTextos_1.capitalizeTextos)(updateTipovidrioDto.tipovidrio);
            const actualizarTipovidrio = this.tipovidrioRepository.merge(existeTipovidrio, updateTipovidrioDto);
            return await this.tipovidrioRepository.save(actualizarTipovidrio);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposvidrios"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const tipovidrio = await this.findOne(id);
            await this.tipovidrioRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Tipovidrio con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposvidrios"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.TiposvidriosService = TiposvidriosService;
exports.TiposvidriosService = TiposvidriosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipovidrio_entity_1.Tipovidrio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TiposvidriosService);
//# sourceMappingURL=tiposvidrios.service.js.map