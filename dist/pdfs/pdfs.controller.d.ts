import { Response } from 'express';
import { PdfsService } from './pdfs.service';
export declare class PdfsController {
    private readonly pdfsService;
    constructor(pdfsService: PdfsService);
    getPdf(res: Response): Promise<void>;
}
