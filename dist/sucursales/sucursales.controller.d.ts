import { SucursalesService } from './sucursales.service';
import { CreateSucursaleDto } from './dto/create-sucursal.dto';
import { UpdateSucursaleDto } from './dto/update-sucursal.dto';
export declare class SucursalesController {
    private readonly sucursalesService;
    constructor(sucursalesService: SucursalesService);
    create(createSucursaleDto: CreateSucursaleDto): Promise<import("./entities/sucursal.entity").Sucursal>;
    findAllPorNombSucursal(sucursal: string): Promise<import("./entities/sucursal.entity").Sucursal[]>;
    findAll(): Promise<import("./entities/sucursal.entity").Sucursal[]>;
    findOne(id: number): Promise<import("./entities/sucursal.entity").Sucursal>;
    update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<import("./entities/sucursal.entity").Sucursal>;
    remove(id: number): Promise<any>;
}
