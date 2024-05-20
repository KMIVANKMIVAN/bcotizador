import { SucursalesService } from './sucursales.service';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';
import { UpdateSucursaleDto } from './dto/update-sucursale.dto';
export declare class SucursalesController {
    private readonly sucursalesService;
    constructor(sucursalesService: SucursalesService);
    create(createSucursaleDto: CreateSucursaleDto): Promise<import("./entities/sucursale.entity").Sucursal>;
    findAll(): Promise<import("./entities/sucursale.entity").Sucursal[]>;
    findOne(id: number): Promise<import("./entities/sucursale.entity").Sucursal>;
    update(id: number, updateSucursaleDto: UpdateSucursaleDto): Promise<import("./entities/sucursale.entity").Sucursal>;
    remove(id: number): Promise<any>;
}
