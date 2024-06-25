import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateInstaltuberiaDto {
  @IsNumber()
  @IsNotEmpty()
  inicio: number;

  @IsNumber()
  @IsNotEmpty()
  fin: number;

  @IsNumber()
  @IsNotEmpty()
  horas: number;
}
