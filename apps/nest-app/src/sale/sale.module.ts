import { Module } from '@nestjs/common';
import { CustomerController } from './ui/customer/customer.controller';
import { CustomerService } from './app/service/customer/customerService';
import { ICustomerRepository } from './app/repository/customer/customerRepository';
import { CustomerRepository } from './infra/repository/customer/customerRepository';

const customerRepositoryProvider = {
  provide: ICustomerRepository,
  useClass: CustomerRepository,
};

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, customerRepositoryProvider],
})
export class SaleModule {}
