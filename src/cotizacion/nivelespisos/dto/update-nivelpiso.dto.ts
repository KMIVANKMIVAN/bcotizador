import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelpisoDto } from './create-nivelpiso.dto';

export class UpdateNivelpisoDto extends PartialType(CreateNivelpisoDto) { }
