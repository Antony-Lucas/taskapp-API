import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfig(app);
  corsManagement(app);
  await app.listen(3000);
}

function corsManagement(app: INestApplication) {
  app.enableCors({
    origin: ['http://localhost:8080', 'https://taskappff.netlify.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
}

function swaggerConfig(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription('API para o gerenciado de tarefas')
    .setVersion('0.1')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
