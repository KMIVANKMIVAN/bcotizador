import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateInstalradiatoalleroDto {
  @IsNumber()
  @IsNotEmpty()
  nroradiador: number;

  @IsNumber()
  @IsNotEmpty()
  horas: number;
}
