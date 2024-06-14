import { Repository } from 'typeorm';
import { CreateDireccioneDto } from './dto/create-direccion.dto';
import { UpdateDireccioneDto } from './dto/update-direccion.dto';
import { Direccion } from './entities/direccion.entity';
import { EmpresasService } from '../empresas/empresas.service';
export declare class DireccionesService {
    private readonly direccioneRepository;
    private readonly empresasService;
    constructor(direccioneRepository: Repository<Direccion>, empresasService: EmpresasService);
    create(createDireccioneDto: CreateDireccioneDto): Promise<Direccion>;
    findAllPorNombDireccion(direccion: string): Promise<Direccion[]>;
    findAll(): Promise<Direccion[]>;
    findOne(id: number): Promise<Direccion>;
    update(id: number, updateDireccioneDto: UpdateDireccioneDto): Promise<Direccion>;
    remove(id: number): Promise<any>;
}
