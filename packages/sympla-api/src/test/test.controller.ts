import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('count')
  async contar(): Promise<{ total: number }> {
    const total = await this.testService.contarRegistros();
    return { total };
  }
}
