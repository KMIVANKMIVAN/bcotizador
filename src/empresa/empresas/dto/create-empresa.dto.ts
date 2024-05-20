import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  razon_social: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  nit: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  ubicacion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  pagina_web: string;

  @IsString()
  @MaxLength(10, { message: 'La longitud maxima es de 10 caracteres' })
  telefono: string;

  @IsString()
  @MaxLength(9, { message: 'La longitud maxima es de 9 caracteres' })
  linea_gratuita: string;

  @IsString()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  celular: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  correo: string;
}
