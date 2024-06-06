import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateTipovidrioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  tipovidrio: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
