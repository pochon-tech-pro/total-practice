import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../../../app/repository/customer/customerRepository';
import { Tel } from '../../../domain/type/tel';
import { Customer } from '../../../domain/model/customer';
import { CustomerEntity } from '../../entities/customer/customer.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  async findByTel(tel: Tel): Promise<Customer> {
    return CustomerRepository.toCustomer(
      await getRepository(CustomerEntity).findOne({ tel: tel.value() }),
    );
  }

  async save(customer: Customer): Promise<void> {
    console.log('save');
  }

  private static toCustomer(entity?: CustomerEntity): Customer {
    return Customer.create(Tel.create(entity.tel), entity.name);
  }
}
