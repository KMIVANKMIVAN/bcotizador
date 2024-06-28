import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateRadiadoreje50cmDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  modelo: string;

  @IsNumber()
  @IsNotEmpty()
  potenciawats: number;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNumber()
  @IsNotEmpty()
  preciopaquete: number;
}
