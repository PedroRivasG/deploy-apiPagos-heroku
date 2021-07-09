import { Body } from "@nestjs/common/decorators";
import { ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Empleados } from "./empleados.interface";

export class EmpleadosDTO {
  
    @ApiProperty()
    Nombre: string;

    @ApiProperty()
    Apellidos: string;

    @ApiProperty()
    Genero: string;

    @ApiProperty()
    Edad: number;

    @ApiProperty()
    telefono: number;
    
   
}
