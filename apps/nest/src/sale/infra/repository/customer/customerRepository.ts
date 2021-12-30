import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../../../app/repository/customer/customerRepository';
import { Tel } from '../../../domain/type/tel';
import { Customer } from '../../../domain/model/customer';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  async findByTel(tel: Tel): Promise<Customer> {
    return Customer.create(tel, '検証太郎');
  }
}
