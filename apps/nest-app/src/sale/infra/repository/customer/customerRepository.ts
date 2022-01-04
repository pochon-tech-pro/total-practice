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
    await getRepository(CustomerEntity).save(
      CustomerRepository.toEntity(customer),
    );
  }

  private static toCustomer(entity?: CustomerEntity): Customer {
    return Customer.create(Tel.create(entity.tel), entity.name);
  }

  private static toEntity(customer: Customer): CustomerEntity {
    const entity = new CustomerEntity();
    entity.name = customer.name();
    entity.tel = customer.tel().value();
    return entity;
  }
}
