import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
export declare class DireccionesController {
    private readonly direccionesService;
    constructor(direccionesService: DireccionesService);
    create(createDireccioneDto: CreateDireccioneDto): Promise<import("./entities/direccione.entity").Direccion>;
    findAll(): Promise<import("./entities/direccione.entity").Direccion[]>;
    findOne(id: number): Promise<import("./entities/direccione.entity").Direccion>;
    update(id: number, updateDireccioneDto: UpdateDireccioneDto): Promise<import("./entities/direccione.entity").Direccion>;
    remove(id: number): Promise<any>;
}
