import { PartialType } from '@nestjs/mapped-types';
import { CreateFactorviajeDto } from './create-factorviaje.dto';

export class UpdateFactorviajeDto extends PartialType(CreateFactorviajeDto) { }
