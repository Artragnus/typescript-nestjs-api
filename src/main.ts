import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundError } from './errors';
import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new NotFoundErrorFilter());

  await app.listen(3000);
}
bootstrap();