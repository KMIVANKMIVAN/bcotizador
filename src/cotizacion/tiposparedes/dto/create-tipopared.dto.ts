import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateTipoparedDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  tipopared: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
