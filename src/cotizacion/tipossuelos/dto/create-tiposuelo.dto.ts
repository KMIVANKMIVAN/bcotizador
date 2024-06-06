import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateTiposueloDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  tiposuelo: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
