import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoparedDto } from './create-tipopared.dto';

export class UpdateTipoparedDto extends PartialType(CreateTipoparedDto) { }
