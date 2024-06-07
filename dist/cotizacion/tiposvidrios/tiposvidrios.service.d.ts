import { Repository } from 'typeorm';
import { CreateTipovidrioDto } from './dto/create-tipovidrio.dto';
import { UpdateTipovidrioDto } from './dto/update-tipovidrio.dto';
import { Tipovidrio } from './entities/tipovidrio.entity';
export declare class TiposvidriosService {
    private readonly tipovidrioRepository;
    constructor(tipovidrioRepository: Repository<Tipovidrio>);
    createSemilla(createTipovidrioDto: CreateTipovidrioDto): Promise<Tipovidrio>;
    create(createTipovidrioDto: CreateTipovidrioDto): Promise<Tipovidrio>;
    findAllPorNombTipoVidrio(tipovidrio: string): Promise<Tipovidrio[]>;
    findAll(): Promise<Tipovidrio[]>;
    findAllClear(): Promise<Tipovidrio[]>;
    findOne(id: number): Promise<Tipovidrio>;
    update(id: number, updateTipovidrioDto: UpdateTipovidrioDto): Promise<Tipovidrio>;
    remove(id: number): Promise<any>;
}
