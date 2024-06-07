import { TiposcotizacionesService } from './tiposcotizaciones.service';
import { CreateTipocotizacionDto } from './dto/create-tipocotizacion.dto';
import { UpdateTipocotizacionDto } from './dto/update-tipocotizacion.dto';
export declare class TiposcotizacionesController {
    private readonly tiposcotizacionesService;
    constructor(tiposcotizacionesService: TiposcotizacionesService);
    create(createTipocotizacionDto: CreateTipocotizacionDto): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion>;
    findAll(): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion[]>;
    findAllPorNombTipoCotiz(tipocotizacion: string): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion[]>;
    findAllClear(): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion[]>;
    findOne(id: number): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion>;
    update(id: number, updateTipocotizacionDto: UpdateTipocotizacionDto): Promise<import("./entities/tipocotizacion.entity").Tipocotizacion>;
    remove(id: number): Promise<any>;
}
