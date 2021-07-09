import { Controller, Get } from '@nestjs/common';
import { ApiCookieAuth, DocumentBuilder } from '@nestjs/swagger';
import { AppService } from './app.service';
@ApiCookieAuth() 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
const options = new DocumentBuilder().addCookieAuth('optional-session-id');