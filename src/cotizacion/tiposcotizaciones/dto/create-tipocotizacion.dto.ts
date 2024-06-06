import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateTipocotizacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  tipocotizacion: string;
}
