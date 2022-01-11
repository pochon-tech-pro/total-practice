import { Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { QueryParameters } from './queryParameters';
import { CustomerService } from '../../app/service/customer/customerService';
import { Customer } from '../../domain/model/customer';
import { CustomerList } from '../../domain/model/customerList';

type ResponseSchema<T> = {
  isSuccess: boolean;
  message: string;
  body: T;
};

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async find(
    @Query() query: QueryParameters,
  ): Promise<ResponseSchema<Customer>> {
    const customer = await this.customerService.find(query);
    return {
      isSuccess: true,
      message: '',
      body: customer,
    };
  }

  @Get('all')
  async all(): Promise<ResponseSchema<CustomerList>> {
    const customerList = await this.customerService.findAll();
    return {
      isSuccess: true,
      message: '',
      body: customerList,
    };
  }

  @Post()
  async save(@Query() query: QueryParameters) {
    console.log(await this.customerService.save());
  }
}
