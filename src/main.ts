import { Controller } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EmpleadosDTO } from './empleados/empleados.dto';
import { EmpleadoSchema } from './schemas/empleados.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Documentacion
  const config = new DocumentBuilder()
    .setTitle('PAGOS DE PERSONAL DE PLANTA')
    .setDescription('Registro de pagos')
    .setVersion('1.0.0')
    .addTag('Api Pagos')
    .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('docpagos',app,document);

  //Documentacion
  
  await app.listen(process.env.POR || 3000);
}
bootstrap();
