import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCookieAuth, ApiHeader, ApiQuery, DocumentBuilder } from '@nestjs/swagger';
import { DetallesDTO } from './detallesp.dto';
import { Detallesp } from './detallesp.interface';
import { DetallespService } from './detallesp.service';
@ApiCookieAuth()  
@Controller('detallesp')

export class DetallespController {
    DetallespService: any;

    constructor(private readonly servicio: DetallespService) {}
    
    @Get()
    ObtenerTodos(): Promise<Detallesp[]> {
      return this.servicio.todos();
    }
  
    @Get()
    ObtenerUno(@Param('id') id): Promise<Detallesp[]> {
      return this.servicio.todos();
    }
   
    @Post()
    crear(@Body() body: Detallesp): Promise<Detallesp> {
      return this.servicio.crear(body);
    }
    
    @Put(':id')
    actualizar(@Param('id') id,@Body() detallep:Detallesp):Promise<Detallesp>
    {
      return this.servicio.update(id,detallep);
    }
   
    @Delete(':id')
    delete(@Param('id') id):Promise<Detallesp>
    {
      return this.servicio.delete(id);
    }
    //@Post()
  //  async create(@Body() createDetallesDTO: DetallesDTO) {
    //  this.DetallespService.create(createDetallesDTO);
   // }
}
const options = new DocumentBuilder().addCookieAuth('optional-session-id');
