import { PartialType } from '@nestjs/mapped-types';
import { CreateInstalradiatoalleroDto } from './create-instalradiatoallero.dto';

export class UpdateInstalradiatoalleroDto extends PartialType(CreateInstalradiatoalleroDto) {}
