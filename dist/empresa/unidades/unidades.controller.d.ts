import { UnidadesService } from './unidades.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
export declare class UnidadesController {
    private readonly unidadesService;
    constructor(unidadesService: UnidadesService);
    create(createUnidadeDto: CreateUnidadeDto): Promise<import("./entities/unidade.entity").Unidad>;
    findAll(): Promise<import("./entities/unidade.entity").Unidad[]>;
    findOne(id: number): Promise<import("./entities/unidade.entity").Unidad>;
    update(id: number, updateUnidadeDto: UpdateUnidadeDto): Promise<import("./entities/unidade.entity").Unidad>;
    remove(id: number): Promise<any>;
}
