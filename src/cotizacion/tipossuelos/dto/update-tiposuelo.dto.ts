import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposueloDto } from './create-tiposuelo.dto';

export class UpdateTiposueloDto extends PartialType(CreateTiposueloDto) { }
