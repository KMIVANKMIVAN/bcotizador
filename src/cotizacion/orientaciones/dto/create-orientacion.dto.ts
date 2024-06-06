import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateOrientacionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  orientacion: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
