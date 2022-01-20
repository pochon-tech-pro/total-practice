import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../../../app/repository/customer/customerRepository';
import { Tel } from '../../../domain/type/tel';
import { Customer } from '../../../domain/model/customer';
import { CustomerEntity } from '../../entities/customer/customer.entity';
import { getRepository } from 'typeorm';
import { CustomerList } from '../../../domain/model/customerList';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  async findByTel(tel: Tel): Promise<Customer> {
    return CustomerRepository.toCustomer(
      await getRepository(CustomerEntity).findOne({ tel: tel.value() }),
    );
  }

  async findAll(): Promise<CustomerList> {
    return CustomerRepository.toCustomerList(
      await getRepository(CustomerEntity).find(),
    );
  }

  async save(customer: Customer): Promise<void> {
    await getRepository(CustomerEntity).save(
      CustomerRepository.toEntity(customer),
    );
  }

  async deleteAll(): Promise<void> {
    await getRepository(CustomerEntity).clear();
  }

  private static toCustomerList(entities?: CustomerEntity[]): CustomerList {
    return entities.length > 0
      ? CustomerList.create(
          ...entities.map((entity) => this.toCustomer(entity)),
        )
      : CustomerList.nullObject();
  }

  private static toCustomer(entity?: CustomerEntity): Customer {
    return entity === undefined
      ? Customer.nullObject()
      : Customer.reConstructor(entity.id, entity.tel, entity.name);
  }

  private static toEntity(customer: Customer): CustomerEntity {
    const entity = new CustomerEntity();
    entity.name = customer.name().value();
    entity.tel = customer.tel().value();
    return entity;
  }
}
