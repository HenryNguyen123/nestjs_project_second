import { Controller, Get } from '@nestjs/common';
import { TestService } from 'src/test/test.service';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}
  @Get('read')
  read() {
    try {
      return 'test';
    } catch (error) {
      console.log(error);
    }
  }
}
