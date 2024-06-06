import { Repository } from 'typeorm';
import { CreateTipoparedDto } from './dto/create-tipopared.dto';
import { UpdateTipoparedDto } from './dto/update-tipopared.dto';
import { Tipopared } from './entities/tipopared.entity';
export declare class TiposparedesService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Tipopared>);
    createSemilla(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared>;
    create(createTipoparedDto: CreateTipoparedDto): Promise<Tipopared>;
    findAll(): Promise<Tipopared[]>;
    findOne(id: number): Promise<Tipopared>;
    update(id: number, updateTipoparedDto: UpdateTipoparedDto): Promise<Tipopared>;
    remove(id: number): Promise<any>;
}
