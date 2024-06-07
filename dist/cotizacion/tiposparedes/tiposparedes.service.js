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
exports.TiposparedesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipopared_entity_1 = require("./entities/tipopared.entity");
const capitalizeTextos_1 = require("../../utils/capitalizeTextos");
let TiposparedesService = class TiposparedesService {
    constructor(tipoparedRepository) {
        this.tipoparedRepository = tipoparedRepository;
    }
    async createSemilla(createTipoparedDto) {
        try {
            createTipoparedDto.tipopared = (0, capitalizeTextos_1.capitalizeTextos)(createTipoparedDto.tipopared);
            const nuevoTipopared = this.tipoparedRepository.create(createTipoparedDto);
            return await this.tipoparedRepository.save(nuevoTipopared);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
                error: `${error}`,
            });
        }
    }
    async create(createTipoparedDto) {
        try {
            createTipoparedDto.valor = Number(createTipoparedDto.valor) * 1 / 100;
            createTipoparedDto.tipopared = (0, capitalizeTextos_1.capitalizeTextos)(createTipoparedDto.tipopared);
            const nuevoTipopared = this.tipoparedRepository.create(createTipoparedDto);
            return await this.tipoparedRepository.save(nuevoTipopared);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException({
                mensaje: `Error del Servidor. Revisar el metodo (create) de la ruta "tiposparedes"`,
                error: `${error}`,
            });
        }
    }
    async findAllPorNombTipoPared(tipopared) {
        try {
            const tiposparedes = await this.tipoparedRepository.createQueryBuilder('tipopared')
                .where('LOWER(tipopared.tipopared) LIKE LOWER(:tipopared)', { tipopared: `%${tipopared.toLowerCase()}%` })
                .limit(5)
                .getMany();
            if (!tiposparedes || tiposparedes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tipos paredes: ${tipopared}`,
                });
            }
            return tiposparedes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAllPorNombTipoPared) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const tiposparedes = await this.tipoparedRepository.find();
            if (!tiposparedes || tiposparedes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposparedes`,
                });
            }
            return tiposparedes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAllClear() {
        try {
            const tiposparedes = await this.tipoparedRepository.find();
            if (!tiposparedes || tiposparedes.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron tiposparedes`,
                });
            }
            tiposparedes.forEach((tipopared) => delete tipopared.valor);
            return tiposparedes;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const tipopared = await this.tipoparedRepository.findOneBy({ id });
            if (!tipopared) {
                throw new common_1.NotFoundException({
                    message: `Tipopared con ID: ${id} no fue encontrada`,
                });
            }
            return tipopared;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateTipoparedDto) {
        try {
            const existeTipopared = await this.findOne(id);
            updateTipoparedDto.tipopared = (0, capitalizeTextos_1.capitalizeTextos)(updateTipoparedDto.tipopared);
            const actualizarTipopared = this.tipoparedRepository.merge(existeTipopared, updateTipoparedDto);
            return await this.tipoparedRepository.save(actualizarTipopared);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const tipopared = await this.findOne(id);
            await this.tipoparedRepository.delete(id);
            return {
                success: true,
                message: `Se eliminó el Tipopared con ID: ${id}`,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "tiposparedes"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.TiposparedesService = TiposparedesService;
exports.TiposparedesService = TiposparedesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipopared_entity_1.Tipopared)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TiposparedesService);
//# sourceMappingURL=tiposparedes.service.js.map