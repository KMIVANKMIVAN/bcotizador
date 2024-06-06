import { Repository } from 'typeorm';
import { CreateOrientacionDto } from './dto/create-orientacion.dto';
import { UpdateOrientacionDto } from './dto/update-orientacion.dto';
import { Orientacion } from './entities/orientacion.entity';
export declare class OrientacionesService {
    private readonly orientacionRepository;
    constructor(orientacionRepository: Repository<Orientacion>);
    createSemilla(createOrientacionDto: CreateOrientacionDto): Promise<Orientacion>;
    create(createOrientacionDto: CreateOrientacionDto): Promise<Orientacion>;
    findAll(): Promise<Orientacion[]>;
    findAllClear(): Promise<Orientacion[]>;
    findOne(id: number): Promise<Orientacion>;
    update(id: number, updateOrientacionDto: UpdateOrientacionDto): Promise<Orientacion>;
    remove(id: number): Promise<any>;
}
