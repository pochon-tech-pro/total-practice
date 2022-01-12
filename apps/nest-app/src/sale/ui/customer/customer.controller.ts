import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { QueryParameters } from './queryParameters';
import { CustomerService } from '../../app/service/customer/customerService';
import { Customer } from '../../domain/model/customer';
import { PostParameters } from './postParameters';

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
  async all(): Promise<
    ResponseSchema<{ id: number; name: string; tel: string }[]>
  > {
    const customerList = await this.customerService.findAll();
    const responseBody = customerList.value().map((customer) => ({
      id: customer.id(),
      name: customer.name().value(),
      tel: customer.tel().value(),
    }));
    return {
      isSuccess: true,
      message: '',
      body: responseBody,
    };
  }

  @Post()
  async save(@Body() body: PostParameters): Promise<ResponseSchema<string>> {
    // curl -X POST -H "Content-Type: application/json" -d '{"name": "佐藤", "tel":"01-1234-9876"}' localhost:3000/customer/
    await this.customerService.save(body);
    return {
      isSuccess: true,
      message: '',
      body: '',
    };
  }
}
