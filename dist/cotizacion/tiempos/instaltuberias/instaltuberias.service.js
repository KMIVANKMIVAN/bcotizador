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
exports.InstaltuberiasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instaltuberia_entity_1 = require("./entities/instaltuberia.entity");
let InstaltuberiasService = class InstaltuberiasService {
    constructor(nivelpisoRepository) {
        this.nivelpisoRepository = nivelpisoRepository;
    }
    async createSemilla(createInstaltuberiaDto) {
        try {
            console.log("createInstaltuberiaDto", createInstaltuberiaDto);
            const nuevoInstaltuberia = this.nivelpisoRepository.create(createInstaltuberiaDto);
            return await this.nivelpisoRepository.save(nuevoInstaltuberia);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "instaltuberias"`,
                error: `${error}`,
            });
        }
    }
    async create(createInstaltuberiaDto) {
        try {
            const nuevoInstaltuberia = this.nivelpisoRepository.create(createInstaltuberiaDto);
            return await this.nivelpisoRepository.save(nuevoInstaltuberia);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "instaltuberias"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const instaltuberias = await this.nivelpisoRepository.find();
            if (!instaltuberias || instaltuberias.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron instaltuberias`,
                });
            }
            return instaltuberias;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorRango(rango) {
        try {
            const instaltuberias = await this.nivelpisoRepository.createQueryBuilder('instaltuberia')
                .where(':rango BETWEEN instaltuberia.inicio AND instaltuberia.fin', { rango })
                .limit(5)
                .getMany();
            if (!instaltuberias || instaltuberias.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron rangos: ${rango}`,
                });
            }
            return instaltuberias;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorRango) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const instaltuberias = await this.nivelpisoRepository.find();
            if (!instaltuberias || instaltuberias.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron instaltuberias`,
                });
            }
            const result = instaltuberias.map(instaltuberia => {
                const { inicio, fin, ...rest } = instaltuberia;
                return {
                    ...rest,
                    rango: `${inicio} a ${fin}`
                };
            });
            result.forEach((horas) => delete horas.horas);
            return result;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllClear) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const instaltuberia = await this.nivelpisoRepository.findOneBy({ id });
            if (!instaltuberia) {
                throw new common_1.NotFoundException({
                    message: `Instaltuberia con ID: ${id} no fue encontrada`,
                });
            }
            return instaltuberia;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateInstaltuberiaDto) {
        try {
            const existeInstaltuberias = await this.findOne(id);
            const actualizarInstaltuberia = this.nivelpisoRepository.merge(existeInstaltuberias, updateInstaltuberiaDto);
            return await this.nivelpisoRepository.save(actualizarInstaltuberia);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const instaltuberia = await this.findOne(id);
            await this.nivelpisoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Instaltuberia con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "instaltuberias"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.InstaltuberiasService = InstaltuberiasService;
exports.InstaltuberiasService = InstaltuberiasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instaltuberia_entity_1.Instaltuberia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstaltuberiasService);
//# sourceMappingURL=instaltuberias.service.js.map