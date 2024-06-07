import { Repository } from 'typeorm';
import { CreateTipocotizacionDto } from './dto/create-tipocotizacion.dto';
import { UpdateTipocotizacionDto } from './dto/update-tipocotizacion.dto';
import { Tipocotizacion } from './entities/tipocotizacion.entity';
export declare class TiposcotizacionesService {
    private readonly tipocotizacionRepository;
    constructor(tipocotizacionRepository: Repository<Tipocotizacion>);
    createSemilla(createTipocotizacionDto: CreateTipocotizacionDto): Promise<Tipocotizacion>;
    create(createTipocotizacionDto: CreateTipocotizacionDto): Promise<Tipocotizacion>;
    findAllPorNombTipoCotiz(tipocotizacion: string): Promise<Tipocotizacion[]>;
    findAll(): Promise<Tipocotizacion[]>;
    findAllClear(): Promise<Tipocotizacion[]>;
    findOne(id: number): Promise<Tipocotizacion>;
    update(id: number, updateTipocotizacionDto: UpdateTipocotizacionDto): Promise<Tipocotizacion>;
    remove(id: number): Promise<any>;
}
