import { NivelespisosService } from './nivelespisos.service';
import { CreateNivelpisoDto } from './dto/create-nivelpiso.dto';
import { UpdateNivelpisoDto } from './dto/update-nivelpiso.dto';
export declare class NivelespisosController {
    private readonly nivelespisosService;
    constructor(nivelespisosService: NivelespisosService);
    create(createNivelpisoDto: CreateNivelpisoDto): Promise<import("./entities/nivelpiso.entity").Nivelpiso>;
    findAll(): Promise<import("./entities/nivelpiso.entity").Nivelpiso[]>;
    findAllClear(): Promise<import("./entities/nivelpiso.entity").Nivelpiso[]>;
    findAllPorNombNivelPiso(nivelpiso: string): Promise<import("./entities/nivelpiso.entity").Nivelpiso[]>;
    findOne(id: number): Promise<import("./entities/nivelpiso.entity").Nivelpiso>;
    update(id: number, updateNivelpisoDto: UpdateNivelpisoDto): Promise<import("./entities/nivelpiso.entity").Nivelpiso>;
    remove(id: number): Promise<any>;
}
