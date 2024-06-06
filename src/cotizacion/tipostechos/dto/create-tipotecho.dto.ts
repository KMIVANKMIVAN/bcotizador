import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateTipotechoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  tipotecho: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
