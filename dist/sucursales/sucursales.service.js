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
exports.SucursalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sucursal_entity_1 = require("./entities/sucursal.entity");
const ciudades_service_1 = require("../ciudades/ciudades.service");
const capitalizeTextos_1 = require("../utils/capitalizeTextos");
let SucursalesService = class SucursalesService {
    constructor(sucursaleRepository, ciudadesService) {
        this.sucursaleRepository = sucursaleRepository;
        this.ciudadesService = ciudadesService;
    }
    async create(createSucursaleDto) {
        try {
            const buscarCiudad = await this.ciudadesService.findOne(createSucursaleDto.ciudad_id);
            createSucursaleDto.sucursal = (0, capitalizeTextos_1.capitalizeTextos)(createSucursaleDto.sucursal);
            createSucursaleDto.ubicacion = (0, capitalizeTextos_1.capitalizeTextos)(createSucursaleDto.ubicacion);
            const { ciudad_id, ...sucursalDatos } = createSucursaleDto;
            const nuevaUnidad = this.sucursaleRepository.create({
                ...sucursalDatos,
                ciudad: buscarCiudad,
            });
            return await this.sucursaleRepository.save(nuevaUnidad);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "sucursales"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findAll() {
        try {
            const sucursales = await this.sucursaleRepository.find({ relations: ['ciudad'] });
            if (!sucursales || sucursales.length === 0) {
                throw new common_1.NotFoundException({
                    message: `No se encontraron Sucursales`,
                });
            }
            return sucursales;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "sucursales"`,
                    error: `${error}`,
                });
            }
        }
    }
    async findOne(id) {
        try {
            const sucursale = await this.sucursaleRepository.findOne({
                where: { id },
            });
            if (!sucursale) {
                throw new common_1.NotFoundException({
                    message: `Sucursal con ID ${id} no fue encontrada`,
                });
            }
            return sucursale;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (findOne) de la ruta "sucursales"`,
                    error: `${error}`,
                });
            }
        }
    }
    async update(id, updateSucursaleDto) {
        try {
            const existeSucursal = await this.findOne(id);
            updateSucursaleDto.sucursal = (0, capitalizeTextos_1.capitalizeTextos)(updateSucursaleDto.sucursal);
            updateSucursaleDto.ubicacion = (0, capitalizeTextos_1.capitalizeTextos)(updateSucursaleDto.ubicacion);
            const buscarCiudad = await this.ciudadesService.findOne(updateSucursaleDto.ciudad_id);
            const actualizarSucursal = await this.sucursaleRepository.preload({
                id,
                ...updateSucursaleDto
            });
            actualizarSucursal.ciudad = buscarCiudad;
            return await this.sucursaleRepository.save(actualizarSucursal);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (update) de la ruta "sucursales"`,
                    error: `${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const sucursal = await this.findOne(id);
            await this.sucursaleRepository.delete(id);
            return { success: true, message: `Se eliminó la Sucursal con ID: ${id}` };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    message: `Error del Servidor. Revisar el metodo (remove) de la ruta "sucursales"`,
                    error: `${error}`,
                });
            }
        }
    }
};
exports.SucursalesService = SucursalesService;
exports.SucursalesService = SucursalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sucursal_entity_1.Sucursal)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ciudades_service_1.CiudadesService])
], SucursalesService);
//# sourceMappingURL=sucursales.service.js.map