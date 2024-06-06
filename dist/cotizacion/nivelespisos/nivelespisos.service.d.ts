import { Repository } from 'typeorm';
import { CreateNivelpisoDto } from './dto/create-nivelpiso.dto';
import { UpdateNivelpisoDto } from './dto/update-nivelpiso.dto';
import { Nivelpiso } from './entities/nivelpiso.entity';
export declare class NivelespisosService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Nivelpiso>);
    createSemilla(createNivelpisoDto: CreateNivelpisoDto): Promise<Nivelpiso>;
    create(createNivelpisoDto: CreateNivelpisoDto): Promise<Nivelpiso>;
    findAll(): Promise<Nivelpiso[]>;
    findAllClear(): Promise<Nivelpiso[]>;
    findOne(id: number): Promise<Nivelpiso>;
    update(id: number, updateNivelpisoDto: UpdateNivelpisoDto): Promise<Nivelpiso>;
    remove(id: number): Promise<any>;
}
