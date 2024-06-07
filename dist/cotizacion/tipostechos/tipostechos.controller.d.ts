import { TipostechosService } from './tipostechos.service';
import { CreateTipotechoDto } from './dto/create-tipotecho.dto';
import { UpdateTipotechoDto } from './dto/update-tipotecho.dto';
export declare class TipostechosController {
    private readonly tipostechosService;
    constructor(tipostechosService: TipostechosService);
    create(createTipotechoDto: CreateTipotechoDto): Promise<import("./entities/tipotecho.entity").Tipotecho>;
    findAllPorNombTipoTecho(tipotecho: string): Promise<import("./entities/tipotecho.entity").Tipotecho[]>;
    findAll(): Promise<import("./entities/tipotecho.entity").Tipotecho[]>;
    findAllClear(): Promise<import("./entities/tipotecho.entity").Tipotecho[]>;
    findOne(id: number): Promise<import("./entities/tipotecho.entity").Tipotecho>;
    update(id: number, updateTipotechoDto: UpdateTipotechoDto): Promise<import("./entities/tipotecho.entity").Tipotecho>;
    remove(id: number): Promise<any>;
}
