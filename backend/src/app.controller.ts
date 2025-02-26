import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return '🚀 Servidor de Pie Diabético funcionando correctamente!';
  }
}
