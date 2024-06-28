import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCotizacionambienteDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  nombreambiente: string;

  @IsNumber()
  @IsNotEmpty()
  volumen: number;

  @IsNumber()
  @IsNotEmpty()
  area: number;

  @IsNumber()
  @IsNotEmpty()
  altura: number;

  @IsNumber()
  @IsNotEmpty()
  nrocelda: number;

  @IsNumber()
  @IsNotEmpty()
  nroradiador: number;

  @IsNumber()
  @IsNotEmpty()
  nroventana: number;

  @IsNumber()
  @IsNotEmpty()
  cotizacion_id: number;
}
