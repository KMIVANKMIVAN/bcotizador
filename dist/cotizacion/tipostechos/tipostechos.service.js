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
exports.TipostechosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipotecho_entity_1 = require("./entities/tipotecho.entity");
let TipostechosService = class TipostechosService {
    constructor(tipotechoRepository) {
        this.tipotechoRepository = tipotechoRepository;
    }
    async createSemilla(createTipotechoDto) {
        try {
            const nuevoTipotecho = this.tipotechoRepository.create(createTipotechoDto);
            return await this.tipotechoRepository.save(nuevoTipotecho);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipostechos"`,
                error: `${error}`,
            });
        }
    }
    async create(createTipotechoDto) {
        try {
            createTipotechoDto.valor = Number(createTipotechoDto.valor) * 1 / 100;
            const nuevoTipotecho = this.tipotechoRepository.create(createTipotechoDto);
            return await this.tipotechoRepository.save(nuevoTipotecho);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tipostechos"`,
                error: `${error}`,
            });
        }
    }
    async findAll() {
        try {
            const tipostechos = await this.tipotechoRepository.find();
            if (!tipostechos || tipostechos.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tipostechos`,
                });
            }
            return tipostechos;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tipostechos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const tipotecho = await this.tipotechoRepository.findOneBy({ id });
            if (!tipotecho) {
                throw new common_1.NotFoundException({
                    message: `Tipotecho con ID: ${id} no fue encontrada`,
                });
            }
            return tipotecho;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tipostechos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateTipotechoDto) {
        try {
            const existeTipotecho = await this.findOne(id);
            const actualizarTipotecho = this.tipotechoRepository.merge(existeTipotecho, updateTipotechoDto);
            return await this.tipotechoRepository.save(actualizarTipotecho);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "tipostechos"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const tipotecho = await this.findOne(id);
            await this.tipotechoRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Tipotecho con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tipostechos"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.TipostechosService = TipostechosService;
exports.TipostechosService = TipostechosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipotecho_entity_1.Tipotecho)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipostechosService);
//# sourceMappingURL=tipostechos.service.js.map