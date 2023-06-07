import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Swagger config */
  const config = new DocumentBuilder()
  .setTitle('CI/CD for OCI')
  .setDescription('Oracle cloud infrastructure CI/CD')
  .setVersion('1.0')
  .addTag('OCI')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
