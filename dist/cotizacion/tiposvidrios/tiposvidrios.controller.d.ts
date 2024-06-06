import { TiposvidriosService } from './tiposvidrios.service';
import { CreateTipovidrioDto } from './dto/create-tipovidrio.dto';
import { UpdateTipovidrioDto } from './dto/update-tipovidrio.dto';
export declare class TiposvidriosController {
    private readonly tiposvidriosService;
    constructor(tiposvidriosService: TiposvidriosService);
    create(createTipovidrioDto: CreateTipovidrioDto): Promise<import("./entities/tipovidrio.entity").Tipovidrio>;
    findAll(): Promise<import("./entities/tipovidrio.entity").Tipovidrio[]>;
    findAllClear(): Promise<import("./entities/tipovidrio.entity").Tipovidrio[]>;
    findOne(id: number): Promise<import("./entities/tipovidrio.entity").Tipovidrio>;
    update(id: number, updateTipovidrioDto: UpdateTipovidrioDto): Promise<import("./entities/tipovidrio.entity").Tipovidrio>;
    remove(id: number): Promise<any>;
}
