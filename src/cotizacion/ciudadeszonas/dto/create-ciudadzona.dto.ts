import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCiudadzonaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  ciudadzona: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsNumber()
  @IsNotEmpty()
  ciudad_id: number;
}
