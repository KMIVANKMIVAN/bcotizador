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
exports.NivelespisosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nivelpiso_entity_1 = require("./entities/nivelpiso.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let NivelespisosService = class NivelespisosService {
    constructor(nivelpisoRepository) {
        this.nivelpisoRepository = nivelpisoRepository;
    }
    async createSemilla(createNivelpisoDto) {
        try {
            createNivelpisoDto.nivelpiso = (0, capitalizeTextos_1.capitalizeTextos)(createNivelpisoDto.nivelpiso);
            const nuevoNivelpiso = this.nivelpisoRepository.create(createNivelpisoDto);
            return await this.nivelpisoRepository.save(nuevoNivelpiso);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "nivelespisos"`,
                error: `${error}`,
            });
        }
    }
    async create(createNivelpisoDto) {
        try {
            createNivelpisoDto.valor = Number(createNivelpisoDto.valor) * 1 / 100;
            createNivelpisoDto.nivelpiso = (0, capitalizeTextos_1.capitalizeTextos)(createNivelpisoDto.nivelpiso);
            const nuevoNivelpiso = this.nivelpisoRepository.create(createNivelpisoDto);
            return await this.nivelpisoRepository.save(nuevoNivelpiso);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "nivelespisos"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const nivelespisos = await this.nivelpisoRepository.find();
            if (!nivelespisos || nivelespisos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron nivelespisos`,
                });
            }
            return nivelespisos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNombNivelPiso(nivelpiso) {
        try {
            const nivelespisos = await this.nivelpisoRepository.createQueryBuilder('nivelpiso')
                .where('LOWER(nivelpiso.nivelpiso) LIKE LOWER(:nivelpiso)', { nivelpiso: `%${nivelpiso.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!nivelespisos || nivelespisos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron nivel pisos: ${nivelpiso}`,
                });
            }
            return nivelespisos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombNivelPiso) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const nivelespisos = await this.nivelpisoRepository.find();
            if (!nivelespisos || nivelespisos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron nivelespisos`,
                });
            }
            nivelespisos.forEach((nivelpiso) => delete nivelpiso.valor);
            return nivelespisos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const nivelpiso = await this.nivelpisoRepository.findOneBy({ id });
            if (!nivelpiso) {
                throw new common_1.NotFoundException({
                    message: `Nivelpiso con ID: ${id} no fue encontrada`,
                });
            }
            return nivelpiso;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateNivelpisoDto) {
        try {
            const existeNivelpiso = await this.findOne(id);
            updateNivelpisoDto.nivelpiso = (0, capitalizeTextos_1.capitalizeTextos)(updateNivelpisoDto.nivelpiso);
            const actualizarNivelpiso = this.nivelpisoRepository.merge(existeNivelpiso, updateNivelpisoDto);
            return await this.nivelpisoRepository.save(actualizarNivelpiso);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const nivelpiso = await this.findOne(id);
            await this.nivelpisoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Nivelpiso con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "nivelespisos"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.NivelespisosService = NivelespisosService;
exports.NivelespisosService = NivelespisosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nivelpiso_entity_1.Nivelpiso)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NivelespisosService);
//# sourceMappingURL=nivelespisos.service.js.map