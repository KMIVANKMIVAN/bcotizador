import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDireccioneDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  direccion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200, { message: 'La longitud maxima es de 200 caracteres' })
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  empresa_id: number;
}
