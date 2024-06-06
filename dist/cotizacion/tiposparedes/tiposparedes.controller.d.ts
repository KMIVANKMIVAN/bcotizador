import { TiposparedesService } from './tiposparedes.service';
import { CreateTipoparedDto } from './dto/create-tipopared.dto';
import { UpdateTipoparedDto } from './dto/update-tipopared.dto';
export declare class TiposparedesController {
    private readonly tiposparedesService;
    constructor(tiposparedesService: TiposparedesService);
    create(createTipoparedDto: CreateTipoparedDto): Promise<import("./entities/tipopared.entity").Tipopared>;
    findAll(): Promise<import("./entities/tipopared.entity").Tipopared[]>;
    findAllClear(): Promise<import("./entities/tipopared.entity").Tipopared[]>;
    findOne(id: number): Promise<import("./entities/tipopared.entity").Tipopared>;
    update(id: number, updateTipoparedDto: UpdateTipoparedDto): Promise<import("./entities/tipopared.entity").Tipopared>;
    remove(id: number): Promise<any>;
}
