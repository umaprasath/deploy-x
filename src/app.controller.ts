import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/status')
  getStatus(): string {
    return this.appService.getHello();
  }

  @Post('/connect/github')
  connectGitHub(): string {
    return this.appService.getHello();
  }

  @Post('/connect/oracle')
  connectOracle(): string {
    return this.appService.getHello();
  }

  @Post('/provision')
  startProvision(): string {
    return this.appService.getHello();
  }
  @Post('/register')
  register(): string {
    return this.appService.getHello();
  }

  @Post('/onboard')
  onboard(): string {
    return this.appService.getHello();
  }
}
