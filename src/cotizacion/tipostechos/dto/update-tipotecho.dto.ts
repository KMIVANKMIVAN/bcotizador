import { PartialType } from '@nestjs/mapped-types';
import { CreateTipotechoDto } from './create-tipotecho.dto';

export class UpdateTipotechoDto extends PartialType(CreateTipotechoDto) { }
