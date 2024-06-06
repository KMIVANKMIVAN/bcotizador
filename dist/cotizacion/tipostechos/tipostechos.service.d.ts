import { Repository } from 'typeorm';
import { CreateTipotechoDto } from './dto/create-tipotecho.dto';
import { UpdateTipotechoDto } from './dto/update-tipotecho.dto';
import { Tipotecho } from './entities/tipotecho.entity';
export declare class TipostechosService {
    private readonly tipotechoRepository;
    constructor(tipotechoRepository: Repository<Tipotecho>);
    createSemilla(createTipotechoDto: CreateTipotechoDto): Promise<Tipotecho>;
    create(createTipotechoDto: CreateTipotechoDto): Promise<Tipotecho>;
    findAll(): Promise<Tipotecho[]>;
    findOne(id: number): Promise<Tipotecho>;
    update(id: number, updateTipotechoDto: UpdateTipotechoDto): Promise<Tipotecho>;
    remove(id: number): Promise<any>;
}
