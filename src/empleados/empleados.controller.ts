import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCookieAuth, ApiExtension, ApiHeader, ApiParam, ApiProperty, ApiQuery, DocumentBuilder } from '@nestjs/swagger';
import { EmpleadosDTO } from './empleados.dto';
import { Empleados } from './empleados.interface';
import { EmpleadosService } from './empleados.service';


@ApiCookieAuth()  
@Controller('empleados')
export class EmpleadosController {
    EmpleadosService: any;
    
    constructor(private readonly servicio: EmpleadosService){}
     
    
    @Get()
    @ApiProperty()
    ObtenerTodos():Promise<Empleados[]> {
        return this.servicio.todos();
    }
    @ApiQuery({name: 'Id'})
    @Get()
    ObtenerUno(@Param('id') id):Promise<Empleados> {
        return this.servicio.uno(id);
    }

    @Post()
    crear(@Body() body:Empleados):Promise<Empleados>{
        return this.servicio.crear(body);
    }

    @ApiQuery({name: 'Id'})
    @Put(':id')
    actualizar(@Param('id') id,@Body() empleado:Empleados):Promise<Empleados>{
        return this.servicio.update(id,empleado);
    }
    @ApiQuery({name: 'Id'})
    @Delete(':id')
    delete(@Param('id') id):Promise<Empleados>{
        return this.servicio.delete(id);
    }
    
    @Post()
    async create(@Body() createEmpleadosDTO: EmpleadosDTO) {
      this.EmpleadosService.create(createEmpleadosDTO); 
    }
   
}

const options = new DocumentBuilder().addCookieAuth('optional-session-id');
