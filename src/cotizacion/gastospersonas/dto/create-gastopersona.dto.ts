import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateGastopersonaDto {
  @IsNumber()
  @IsNotEmpty()
  nropersona: number;

  @IsNumber()
  @IsNotEmpty()
  alimento: number;

  @IsNumber()
  @IsNotEmpty()
  alojamiento: number;

  @IsNumber()
  @IsNotEmpty()
  extras: number;
}
