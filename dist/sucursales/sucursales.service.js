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
const sucursale_entity_1 = require("./entities/sucursale.entity");
const departamentos_service_1 = require("../departamentos/departamentos.service");
let SucursalesService = class SucursalesService {
    constructor(sucursaleRepository, departamentosService) {
        this.sucursaleRepository = sucursaleRepository;
        this.departamentosService = departamentosService;
    }
    async create(createSucursaleDto) {
        try {
            const buscarDepartamento = await this.departamentosService.findOne(createSucursaleDto.departamento_id);
            const { departamento_id, ...sucursalDatos } = createSucursaleDto;
            const nuevaUnidad = this.sucursaleRepository.create({
                ...sucursalDatos,
                departamento: buscarDepartamento,
            });
            return await this.sucursaleRepository.save(nuevaUnidad);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (create) de la ruta "sucursales"`,
                    error: error,
                });
            }
        }
    }
    async findAll() {
        try {
            const sucursales = await this.sucursaleRepository.find({ relations: ['departamento'] });
            if (!sucursales || sucursales.length === 0) {
                throw new common_1.BadRequestException({
                    statusCode: 404,
                    message: `No se encontraron Sucursales`,
                });
            }
            return sucursales;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    message: `Error del Servidor. Revisar el metodo (findAll) de la ruta "sucursales"`,
                    error: error,
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
                throw new common_1.BadRequestException({
                    statusCode: 400,
                    error: `La sucursal con ID ${id} NO Existe`,
                    message: `Sucursal con ID ${id} no fue encontrada`,
                });
            }
            return sucursale;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    error: `Error del Servidor en (findOne): ${error}`,
                    message: `Error del Servidor en (findOne): ${error}`,
                });
            }
        }
    }
    async update(id, updateSucursaleDto) {
        try {
            const existingSucursale = await this.findOne(id);
            if (!existingSucursale) {
                throw new common_1.BadRequestException({
                    statusCode: 400,
                    error: `Sucursal con ID ${id} NO Existe`,
                    message: `Sucursal con ID ${id} no fue encontrada`,
                });
            }
            const updatedSucursale = Object.assign(existingSucursale, updateSucursaleDto);
            return await this.sucursaleRepository.save(updatedSucursale);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    error: `Error del Servidor en (update): ${error}`,
                    message: `Error del Servidor en (update): ${error}`,
                });
            }
        }
    }
    async remove(id) {
        try {
            const sucursale = await this.findOne(id);
            if (!sucursale) {
                throw new common_1.BadRequestException({
                    statusCode: 400,
                    error: `Sucursal con ID ${id} NO Existe`,
                    message: `Sucursal con ID ${id} no fue encontrada`,
                });
            }
            await this.sucursaleRepository.delete(id);
            return { success: true, message: `Se eliminó la Sucursal con ID: ${id}` };
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException({
                    statusCode: 500,
                    error: `Error del Servidor en (remove): ${error}`,
                    message: `Error del Servidor en (remove): ${error}`,
                });
            }
        }
    }
};
exports.SucursalesService = SucursalesService;
exports.SucursalesService = SucursalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sucursale_entity_1.Sucursal)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        departamentos_service_1.DepartamentosService])
], SucursalesService);
//# sourceMappingURL=sucursales.service.js.map