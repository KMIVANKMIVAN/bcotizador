import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocotizacionDto } from './create-tipocotizacion.dto';

export class UpdateTipocotizacionDto extends PartialType(CreateTipocotizacionDto) { }
