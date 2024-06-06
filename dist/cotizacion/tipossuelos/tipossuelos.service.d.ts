import { Repository } from 'typeorm';
import { CreateTiposueloDto } from './dto/create-tiposuelo.dto';
import { UpdateTiposueloDto } from './dto/update-tiposuelo.dto';
import { Tiposuelo } from './entities/tiposuelo.entity';
export declare class TipossuelosService {
    private readonly tiposueloRepository;
    constructor(tiposueloRepository: Repository<Tiposuelo>);
    createSemilla(createTiposueloDto: CreateTiposueloDto): Promise<Tiposuelo>;
    create(createTiposueloDto: CreateTiposueloDto): Promise<Tiposuelo>;
    findAll(): Promise<Tiposuelo[]>;
    findAllClear(): Promise<Tiposuelo[]>;
    findOne(id: number): Promise<Tiposuelo>;
    update(id: number, updateTiposueloDto: UpdateTiposueloDto): Promise<Tiposuelo>;
    remove(id: number): Promise<any>;
}
