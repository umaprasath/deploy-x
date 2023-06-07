import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  connectResourceProvier(): string {
    return 'Create connection to resource provider';
  }
}
