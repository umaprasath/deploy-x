import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  getHello(): string {
    return 'Hello World!';
  }

  connectResourceProvier(): string {
    return 'Create connection to resource provider';
  }
}
