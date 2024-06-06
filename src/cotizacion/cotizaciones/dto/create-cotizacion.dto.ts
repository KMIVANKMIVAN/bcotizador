import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCotizacionDto {
  @IsNumber()
  @IsNotEmpty()
  volumen: number;

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
  
  /* @IsNumber()
  @IsNotEmpty()
  _id: number; */
}
