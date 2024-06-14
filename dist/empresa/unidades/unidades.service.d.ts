import { Repository } from 'typeorm';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { Unidad } from './entities/unidade.entity';
import { DireccionesService } from '../direcciones/direcciones.service';
export declare class UnidadesService {
    private readonly unidadRepository;
    private readonly direccionesService;
    constructor(unidadRepository: Repository<Unidad>, direccionesService: DireccionesService);
    create(createUnidadeDto: CreateUnidadeDto): Promise<Unidad>;
    findAllPorNombUnidad(unidad: string): Promise<Unidad[]>;
    findAll(): Promise<Unidad[]>;
    findOne(id: number): Promise<Unidad>;
    update(id: number, updateUnidadeDto: UpdateUnidadeDto): Promise<Unidad>;
    remove(id: number): Promise<any>;
}
