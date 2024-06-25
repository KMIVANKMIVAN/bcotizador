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
exports.Toallerosejes50cmService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const toalleroeje50cm_entity_1 = require("./entities/toalleroeje50cm.entity");
const capitalizeTextos_1 = require("../../../utils/capitalizeTextos");
let Toallerosejes50cmService = class Toallerosejes50cmService {
    constructor(nivelpisoRepository) {
        this.nivelpisoRepository = nivelpisoRepository;
    }
    async createSemilla(createToalleroeje50cmDto) {
        try {
            createToalleroeje50cmDto.modelo = (0, capitalizeTextos_1.capitalizeTextos)(createToalleroeje50cmDto.modelo);
            const nuevoCiudad = this.nivelpisoRepository.create(createToalleroeje50cmDto);
            return await this.nivelpisoRepository.save(nuevoCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "toallerosejes50cm"`,
                error: `${error}`,
            });
        }
    }
    async create(createToalleroeje50cmDto) {
        try {
            createToalleroeje50cmDto.modelo = (0, capitalizeTextos_1.capitalizeTextos)(createToalleroeje50cmDto.modelo);
            const nuevoCiudad = this.nivelpisoRepository.create(createToalleroeje50cmDto);
            return await this.nivelpisoRepository.save(nuevoCiudad);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "toallerosejes50cm"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const toallerosejes50cm = await this.nivelpisoRepository.find();
            if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron toallerosejes50cm`,
                });
            }
            return toallerosejes50cm;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNombModelo(modelo) {
        try {
            const toallerosejes50cm = await this.nivelpisoRepository.createQueryBuilder('modelo')
                .where('LOWER(modelo.modelo) LIKE LOWER(:modelo)', { modelo: `%${modelo.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron modelos: ${modelo}`,
                });
            }
            return toallerosejes50cm;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombModelo) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const toallerosejes50cm = await this.nivelpisoRepository.find();
            if (!toallerosejes50cm || toallerosejes50cm.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron toallerosejes50cm`,
                });
            }
            toallerosejes50cm.forEach((potenciawats) => delete potenciawats.potenciawats);
            return toallerosejes50cm;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const toalleroeje50cm = await this.nivelpisoRepository.findOneBy({ id });
            if (!toalleroeje50cm) {
                throw new common_1.NotFoundException({
                    message: `Toalleroeje50cm con ID: ${id} no fue encontrada`,
                });
            }
            return toalleroeje50cm;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateToalleroeje50cmDto) {
        try {
            const existeToalleroeje50cm = await this.findOne(id);
            updateToalleroeje50cmDto.modelo = (0, capitalizeTextos_1.capitalizeTextos)(updateToalleroeje50cmDto.modelo);
            const actualizarCiudad = this.nivelpisoRepository.merge(existeToalleroeje50cm, updateToalleroeje50cmDto);
            return await this.nivelpisoRepository.save(actualizarCiudad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const toalleroeje50cm = await this.findOne(id);
            await this.nivelpisoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Toalleroeje50cm con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "toallerosejes50cm"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.Toallerosejes50cmService = Toallerosejes50cmService;
exports.Toallerosejes50cmService = Toallerosejes50cmService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(toalleroeje50cm_entity_1.Toalleroeje50cm)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Toallerosejes50cmService);
//# sourceMappingURL=toallerosejes50cm.service.js.map