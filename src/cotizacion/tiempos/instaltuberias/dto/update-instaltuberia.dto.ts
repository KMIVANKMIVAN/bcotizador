import { PartialType } from '@nestjs/mapped-types';
import { CreateInstaltuberiaDto } from './create-instaltuberia.dto';

export class UpdateInstaltuberiaDto extends PartialType(CreateInstaltuberiaDto) {}
