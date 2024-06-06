import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccioneDto } from './create-direccion.dto';

export class UpdateDireccioneDto extends PartialType(CreateDireccioneDto) { }
