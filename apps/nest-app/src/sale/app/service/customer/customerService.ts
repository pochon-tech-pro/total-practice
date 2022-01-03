import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../../domain/model/customer';
import { QueryParameters } from '../../../ui/customer/queryParameters';
import { Tel } from '../../../domain/type/tel';
import { ICustomerRepository } from '../../repository/customer/customerRepository';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async find(params: QueryParameters): Promise<Customer> {
    return this.repository.findByTel(Tel.create(params.tel));
  }

  async save(): Promise<void> {
    await this.repository.save(Customer.nullObject());
    console.log('app.service: save');
  }
}
