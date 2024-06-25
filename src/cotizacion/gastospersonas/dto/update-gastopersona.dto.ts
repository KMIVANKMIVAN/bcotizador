import { PartialType } from '@nestjs/mapped-types';
import { CreateGastopersonaDto } from './create-gastopersona.dto';

export class UpdateGastopersonaDto extends PartialType(CreateGastopersonaDto) { }
