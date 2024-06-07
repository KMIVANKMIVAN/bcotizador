import { Repository } from 'typeorm';
import { CreateCiudadzonaDto } from './dto/create-ciudadzona.dto';
import { UpdateCiudadzonaDto } from './dto/update-ciudadzona.dto';
import { Ciudadzona } from './entities/ciudadzona.entity';
import { CiudadesService } from 'src/ciudades/ciudades.service';
export declare class CiudadeszonasService {
    private readonly ciudadzonaRepository;
    private readonly ciudadesService;
    constructor(ciudadzonaRepository: Repository<Ciudadzona>, ciudadesService: CiudadesService);
    createSemilla(createCiudadzonaDto: CreateCiudadzonaDto): Promise<Ciudadzona>;
    create(createCiudadzonaDto: CreateCiudadzonaDto): Promise<Ciudadzona>;
    findAll(): Promise<Ciudadzona[]>;
    findAllPorCiudad(ciudadId: number): Promise<Ciudadzona[]>;
    findAllClear(): Promise<Ciudadzona[]>;
    findAllPorNombCiudZona(ciudzona: string): Promise<Ciudadzona[]>;
    findOne(id: number): Promise<Ciudadzona>;
    update(id: number, updateCiudadzonaDto: UpdateCiudadzonaDto): Promise<Ciudadzona>;
    remove(id: number): Promise<any>;
}
