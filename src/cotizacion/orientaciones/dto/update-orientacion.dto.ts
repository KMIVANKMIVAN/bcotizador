import { PartialType } from '@nestjs/mapped-types';
import { CreateOrientacionDto } from './create-orientacion.dto';

export class UpdateOrientacionDto extends PartialType(CreateOrientacionDto) { }
