import { PartialType } from '@nestjs/mapped-types';
import { CreateTipovidrioDto } from './create-tipovidrio.dto';

export class UpdateTipovidrioDto extends PartialType(CreateTipovidrioDto) { }
