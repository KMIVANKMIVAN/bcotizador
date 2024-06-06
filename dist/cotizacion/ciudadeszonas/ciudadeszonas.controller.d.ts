import { CiudadeszonasService } from './ciudadeszonas.service';
import { CreateCiudadzonaDto } from './dto/create-ciudadzona.dto';
import { UpdateCiudadzonaDto } from './dto/update-ciudadzona.dto';
export declare class CiudadeszonasController {
    private readonly ciudadeszonasService;
    constructor(ciudadeszonasService: CiudadeszonasService);
    create(createCiudadzonaDto: CreateCiudadzonaDto): Promise<import("./entities/ciudadzona.entity").Ciudadzona>;
    findAll(): Promise<import("./entities/ciudadzona.entity").Ciudadzona[]>;
    findOne(id: number): Promise<import("./entities/ciudadzona.entity").Ciudadzona>;
    update(id: number, updateCiudadzonaDto: UpdateCiudadzonaDto): Promise<import("./entities/ciudadzona.entity").Ciudadzona>;
    remove(id: number): Promise<any>;
}
