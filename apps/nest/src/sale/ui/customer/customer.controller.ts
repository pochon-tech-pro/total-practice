import { Controller, Get, Inject, Query } from '@nestjs/common';
import { QueryParameters } from './queryParameters';
import { CustomerService } from '../../app/service/customer/customerService';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async find(@Query() query: QueryParameters) {
    console.log(await this.customerService.find(query));
  }
}
