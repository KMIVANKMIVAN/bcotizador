import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateFactorviajeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  ciudad: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
