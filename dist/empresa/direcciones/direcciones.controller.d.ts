import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccion.dto';
import { UpdateDireccioneDto } from './dto/update-direccion.dto';
export declare class DireccionesController {
    private readonly direccionesService;
    constructor(direccionesService: DireccionesService);
    create(createDireccioneDto: CreateDireccioneDto): Promise<import("./entities/direccion.entity").Direccion>;
    findAllPorNombDireccion(direccion: string): Promise<import("./entities/direccion.entity").Direccion[]>;
    findAll(): Promise<import("./entities/direccion.entity").Direccion[]>;
    findOne(id: number): Promise<import("./entities/direccion.entity").Direccion>;
    update(id: number, updateDireccioneDto: UpdateDireccioneDto): Promise<import("./entities/direccion.entity").Direccion>;
    remove(id: number): Promise<any>;
}
