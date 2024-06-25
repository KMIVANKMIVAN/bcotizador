import { Toallerosejes50cmService } from './toallerosejes50cm.service';
import { CreateToalleroeje50cmDto } from './dto/create-toalleroeje50cm.dto';
import { UpdateToalleroeje50cmDto } from './dto/update-toalleroeje50cm.dto';
export declare class Toallerosejes50cmController {
    private readonly toallerosejes50cmService;
    constructor(toallerosejes50cmService: Toallerosejes50cmService);
    create(createToalleroeje50cmDto: CreateToalleroeje50cmDto): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm>;
    findAll(): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm[]>;
    findAllClear(): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm[]>;
    findAllPorNombModelo(modelo: string): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm[]>;
    findOne(id: number): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm>;
    update(id: number, updateToalleroeje50cmDto: UpdateToalleroeje50cmDto): Promise<import("./entities/toalleroeje50cm.entity").Toalleroeje50cm>;
    remove(id: number): Promise<any>;
}
