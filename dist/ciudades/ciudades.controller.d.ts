import { CiudadesService } from './ciudades.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
export declare class CiudadesController {
    private readonly ciudadesService;
    constructor(ciudadesService: CiudadesService);
    create(createCiudadDto: CreateCiudadDto): Promise<import("./entities/ciudad.entity").Ciudad>;
    findAll(): Promise<import("./entities/ciudad.entity").Ciudad[]>;
    findAllClear(): Promise<import("./entities/ciudad.entity").Ciudad[]>;
    findOne(id: number): Promise<import("./entities/ciudad.entity").Ciudad>;
    update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<import("./entities/ciudad.entity").Ciudad>;
    remove(id: number): Promise<any>;
}
