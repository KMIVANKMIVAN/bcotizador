import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizacionambienteDto } from './create-cotizacionambiente.dto';

export class UpdateCotizacionambienteDto extends PartialType(CreateCotizacionambienteDto) { }
