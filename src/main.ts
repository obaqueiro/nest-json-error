import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, { transport: Transport.RMQ,
    options: { 
 	urls: ['amqp://localhost:5672'],
        queue: 'test-queue',

        queueOptions: {
  	 durable:true	
	}	
  }
  })
  app.listen(() => console.log('Microservice is listening'));
  }
bootstrap();
