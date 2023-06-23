import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerModel } from './model/customer';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer(@Body() CustomerModel:CustomerModel): string {
    return this.customerService.getHello();
  }

  @Post('/register')
  register(): string {
    return this.customerService.getHello();
  }

  @Post('/onboard')
  onboard(): string {
    return this.customerService.getHello();
  }
}
