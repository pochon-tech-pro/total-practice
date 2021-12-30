import { Controller, Get, Query } from '@nestjs/common';
import { QueryParameters } from './queryParameters';

@Controller('customer')
export class CustomerController {
  @Get()
  async find(@Query() query: QueryParameters) {
    console.log(query);
  }
}
