import { SemillasService } from './semillas.service';
export declare class SemillasController {
    private readonly semillasService;
    constructor(semillasService: SemillasService);
    ejecutarSemilla(): Promise<boolean>;
}
