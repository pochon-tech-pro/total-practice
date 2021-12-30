import { Module } from '@nestjs/common';
import { CustomerController } from './ui/customer/customer.controller';

@Module({
  controllers: [CustomerController],
  providers: [],
})
export class CustomerModule {}
