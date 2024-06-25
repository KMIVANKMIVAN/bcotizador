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
exports.GastospersonasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const gastopersona_entity_1 = require("./entities/gastopersona.entity");
let GastospersonasService = class GastospersonasService {
    constructor(gastopersonaRepository) {
        this.gastopersonaRepository = gastopersonaRepository;
    }
    async createSemilla(createGastopersonaDto) {
        try {
            const nuevoGastospersona = this.gastopersonaRepository.create(createGastopersonaDto);
            return await this.gastopersonaRepository.save(nuevoGastospersona);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (createSemilla) de la ruta "gastospersonas"`,
                error: `${error}`,
            });
        }
    }
    async create(createGastopersonaDto) {
        try {
            const nuevoGastospersona = this.gastopersonaRepository.create(createGastopersonaDto);
            return await this.gastopersonaRepository.save(nuevoGastospersona);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "gastospersonas"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const gastospersonas = await this.gastopersonaRepository.find();
            if (!gastospersonas || gastospersonas.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron gastospersonas`,
                });
            }
            return gastospersonas;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllPorNroPersona(nropersona) {
        try {
            const gastospersonas = await this.gastopersonaRepository.createQueryBuilder('nropersona')
                .where({ nropersona: nropersona })
                .limit(5)
                .getMany();
            if (!gastospersonas || gastospersonas.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron numero de persona: ${nropersona}`,
                });
            }
            return gastospersonas;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNroPersona) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const gastospersonas = await this.gastopersonaRepository.find();
            if (!gastospersonas || gastospersonas.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron gastospersonas`,
                });
            }
            gastospersonas.forEach((gastopersona) => delete gastopersona.alimento);
            gastospersonas.forEach((gastopersona) => delete gastopersona.alojamiento);
            gastospersonas.forEach((gastopersona) => delete gastopersona.extras);
            return gastospersonas;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const gastopersona = await this.gastopersonaRepository.findOneBy({ id });
            if (!gastopersona) {
                throw new common_1.NotFoundException({
                    message: `Gastopersona con ID: ${id} no fue encontrada`,
                });
            }
            return gastopersona;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateGastopersonaDto) {
        try {
            const existeGastospersona = await this.findOne(id);
            const actualizarGastospersona = this.gastopersonaRepository.merge(existeGastospersona, updateGastopersonaDto);
            return await this.gastopersonaRepository.save(actualizarGastospersona);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const gastopersona = await this.findOne(id);
            await this.gastopersonaRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Gastopersona con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "gastospersonas"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.GastospersonasService = GastospersonasService;
exports.GastospersonasService = GastospersonasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gastopersona_entity_1.Gastopersona)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GastospersonasService);
//# sourceMappingURL=gastospersonas.service.js.map