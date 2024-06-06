import { PartialType } from '@nestjs/mapped-types';
import { CreateCiudadzonaDto } from './create-ciudadzona.dto';

export class UpdateCiudadzonaDto extends PartialType(CreateCiudadzonaDto) { }
