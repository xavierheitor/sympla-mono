import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : {
            message: 'Internal server error',
            error: exception,
          };

    const logPayload = {
      timestamp: new Date().toISOString(),
      method: request.method,
      url: request.url,
      status,
      message: errorResponse,
    };

    if (status >= 500) {
      console.error('🔥 Server Error:', logPayload);
    } else if (status >= 400) {
      console.warn('⚠️ Client Error:', logPayload);
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:
        errorResponse instanceof Object
          ? errorResponse
          : { message: errorResponse },
    });
  }
}
