import { SemillacotizacionService } from './semillacotizacion.service';
export declare class SemillacotizacionController {
    private readonly semillacotizacionService;
    constructor(semillacotizacionService: SemillacotizacionService);
    ejecutarSemilla(): Promise<boolean>;
}
