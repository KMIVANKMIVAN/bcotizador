import { Repository } from 'typeorm';
import { CreateDireccioneDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';
import { Direccion } from './entities/direccione.entity';
import { EmpresasService } from '../empresas/empresas.service';
export declare class DireccionesService {
    private readonly direccioneRepository;
    private readonly empresasService;
    constructor(direccioneRepository: Repository<Direccion>, empresasService: EmpresasService);
    create(createDireccioneDto: CreateDireccioneDto): Promise<Direccion>;
    findAll(): Promise<Direccion[]>;
    findOne(id: number): Promise<Direccion>;
    update(id: number, updateDireccioneDto: UpdateDireccioneDto): Promise<Direccion>;
    remove(id: number): Promise<any>;
}
