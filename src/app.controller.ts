import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { AllExceptionsFilter } from './all-exceptions.filter';

@UseFilters(new AllExceptionsFilter())
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern()
  getHello(message): void{
      console.log("I got some JSON message", message)
  }
}
