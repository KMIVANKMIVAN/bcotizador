import { Repository } from 'typeorm';
import { CreateToalleroeje50cmDto } from './dto/create-toalleroeje50cm.dto';
import { UpdateToalleroeje50cmDto } from './dto/update-toalleroeje50cm.dto';
import { Toalleroeje50cm } from './entities/toalleroeje50cm.entity';
export declare class Toallerosejes50cmService {
    private readonly nivelpisoRepository;
    constructor(nivelpisoRepository: Repository<Toalleroeje50cm>);
    createSemilla(createToalleroeje50cmDto: CreateToalleroeje50cmDto): Promise<Toalleroeje50cm>;
    create(createToalleroeje50cmDto: CreateToalleroeje50cmDto): Promise<Toalleroeje50cm>;
    findAll(): Promise<Toalleroeje50cm[]>;
    findAllPorNombModelo(modelo: string): Promise<Toalleroeje50cm[]>;
    findAllClear(): Promise<Toalleroeje50cm[]>;
    findOne(id: number): Promise<Toalleroeje50cm>;
    update(id: number, updateToalleroeje50cmDto: UpdateToalleroeje50cmDto): Promise<Toalleroeje50cm>;
    remove(id: number): Promise<any>;
}
