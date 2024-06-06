import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-rol.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) { }
