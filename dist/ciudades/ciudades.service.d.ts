import { Repository } from 'typeorm';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';
export declare class CiudadesService {
    private readonly ciudadRepository;
    constructor(ciudadRepository: Repository<Ciudad>);
    createSemilla(createCiudadDto: CreateCiudadDto): Promise<Ciudad>;
    create(createCiudadDto: CreateCiudadDto): Promise<Ciudad>;
    findAllPorNombCiudad(ciudad: string): Promise<Ciudad[]>;
    findAll(): Promise<Ciudad[]>;
    findAllClear(): Promise<Ciudad[]>;
    findOne(id: number): Promise<Ciudad>;
    update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<Ciudad>;
    remove(id: number): Promise<any>;
}
