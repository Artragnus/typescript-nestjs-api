import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.code === 'P2002') {
      return response.status(422).json({
        statusCode: 422,
        message: 'Unprocessable Entity',
      });
    }

    if (exception.code === 'P2025') {
      return response.status(404).json({
        statusCode: 404,
        message: 'Not Found',
      });
    }

    return response.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
}
