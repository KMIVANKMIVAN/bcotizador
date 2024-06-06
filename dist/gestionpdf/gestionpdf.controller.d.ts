import { GestionpdfService } from './gestionpdf.service';
import { CreateGestionpdfDto } from './dto/create-gestionpdf.dto';
import { UpdateGestionpdfDto } from './dto/update-gestionpdf.dto';
export declare class GestionpdfController {
    private readonly gestionpdfService;
    constructor(gestionpdfService: GestionpdfService);
    create(createGestionpdfDto: CreateGestionpdfDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateGestionpdfDto: UpdateGestionpdfDto): any;
    remove(id: string): any;
}
