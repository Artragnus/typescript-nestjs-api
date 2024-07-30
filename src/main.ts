import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BadRequestError, NotFoundError } from './errors';
import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter';
import { BadRequestErrorFilter } from './bad-request-error/bad-request-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new NotFoundErrorFilter(), new BadRequestErrorFilter());

  await app.listen(3000);
}
bootstrap();
