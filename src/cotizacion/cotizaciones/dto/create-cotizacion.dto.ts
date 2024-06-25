import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCotizacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  nombrecotizacion: string;

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
  nrocotizacion: number;

  @IsNumber()
  @IsNotEmpty()
  cantidadventana: number;

  @IsNumber()
  @IsNotEmpty()
  ciudadzona_id: number;

  @IsNumber()
  @IsNotEmpty()
  nivelpiso_id: number;

  @IsNumber()
  @IsNotEmpty()
  orientacion_id: number;

  @IsNumber()
  @IsNotEmpty()
  tipopared_id: number;

  @IsNumber()
  @IsNotEmpty()
  tiposuelo_id: number;

  @IsNumber()
  @IsNotEmpty()
  tipotecho_id: number;

  @IsNumber()
  @IsNotEmpty()
  tipovidrio_id: number;

  @IsNumber()
  @IsNotEmpty()
  tipocotizacion_id: number;

  @IsNumber()
  @IsNotEmpty()
  factorviaje_id: number;

  @IsNumber()
  @IsNotEmpty()
  toalleroeje50cm_id: number;

  @IsNumber()
  @IsNotEmpty()
  gastopersona_id: number;

  @IsNumber()
  @IsNotEmpty()
  radiadoreje50cm_id: number;

  @IsNumber()
  @IsNotEmpty()
  instaltuberia_id: number;

  @IsNumber()
  @IsNotEmpty()
  instalradiatoallero_id: number;
}
