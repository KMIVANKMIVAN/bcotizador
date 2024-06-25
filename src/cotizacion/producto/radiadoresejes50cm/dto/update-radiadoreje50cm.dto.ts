import { PartialType } from '@nestjs/mapped-types';
import { CreateRadiadoreje50cmDto } from './create-radiadoreje50cm.dto';

export class UpdateRadiadoreje50cmDto extends PartialType(CreateRadiadoreje50cmDto) { }
