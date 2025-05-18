import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, headers, body } = req;
    const startTime = Date.now();

    console.log('📥 Request:', {
      method,
      url: originalUrl,
      headers,
      body,
    });

    // Captura da resposta
    const originalSend = res.send.bind(res);
    res.send = (data: any) => {
      const elapsed = Date.now() - startTime;
      console.log('📤 Response:', {
        url: originalUrl,
        status: res.statusCode,
        time: `${elapsed}ms`,
        response: this.tryParseJson(data),
      });
      return originalSend(data);
    };

    next();
  }

  private tryParseJson(data: any): any {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return JSON.parse(data);
    } catch {
      return data;
    }
  }
}
