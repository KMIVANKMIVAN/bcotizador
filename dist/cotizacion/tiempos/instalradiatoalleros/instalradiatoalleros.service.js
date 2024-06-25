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
exports.InstalradiatoallerosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instalradiatoallero_entity_1 = require("./entities/instalradiatoallero.entity");
let InstalradiatoallerosService = class InstalradiatoallerosService {
    constructor(nivelpisoRepository) {
        this.nivelpisoRepository = nivelpisoRepository;
    }
    async createSemilla(createInstalradiatoalleroDto) {
        try {
            const nuevoInstalradiatoallero = this.nivelpisoRepository.create(createInstalradiatoalleroDto);
            return await this.nivelpisoRepository.save(nuevoInstalradiatoallero);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "instalradiatoalleros"`,
                error: `${error}`,
            });
        }
    }
    async create(createInstalradiatoalleroDto) {
        try {
            const nuevoInstalradiatoallero = this.nivelpisoRepository.create(createInstalradiatoalleroDto);
            return await this.nivelpisoRepository.save(nuevoInstalradiatoallero);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "instalradiatoalleros"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const instalradiatoalleros = await this.nivelpisoRepository.find();
            if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron instalradiatoalleros`,
                });
            }
            return instalradiatoalleros;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNroradiador(nroradiador) {
        try {
            const instalradiatoalleros = await this.nivelpisoRepository.createQueryBuilder('nroradiador')
                .where('LOWER(nroradiador.nroradiador) LIKE LOWER(:nroradiador)', { nroradiador: `%${nroradiador}%` })
                .limit(5)
                .getMany();
            if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron nroradiadors: ${nroradiador}`,
                });
            }
            return instalradiatoalleros;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNroradiador) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const instalradiatoalleros = await this.nivelpisoRepository.find();
            if (!instalradiatoalleros || instalradiatoalleros.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron instalradiatoalleros`,
                });
            }
            instalradiatoalleros.forEach((horas) => delete horas.horas);
            return instalradiatoalleros;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const instalradiatoallero = await this.nivelpisoRepository.findOneBy({ id });
            if (!instalradiatoallero) {
                throw new common_1.NotFoundException({
                    message: `Instalradiatoallero con ID: ${id} no fue encontrada`,
                });
            }
            return instalradiatoallero;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateInstalradiatoalleroDto) {
        try {
            const existeInstaltuberias = await this.findOne(id);
            const actualizarInstalradiatoallero = this.nivelpisoRepository.merge(existeInstaltuberias, updateInstalradiatoalleroDto);
            return await this.nivelpisoRepository.save(actualizarInstalradiatoallero);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const instalradiatoallero = await this.findOne(id);
            await this.nivelpisoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Instalradiatoallero con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "instalradiatoalleros"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.InstalradiatoallerosService = InstalradiatoallerosService;
exports.InstalradiatoallerosService = InstalradiatoallerosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instalradiatoallero_entity_1.Instalradiatoallero)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstalradiatoallerosService);
//# sourceMappingURL=instalradiatoalleros.service.js.map