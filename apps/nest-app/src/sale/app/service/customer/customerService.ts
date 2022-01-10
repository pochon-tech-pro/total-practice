import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../../domain/model/customer';
import { QueryParameters } from '../../../ui/customer/queryParameters';
import { Tel } from '../../../domain/type/tel';
import { ICustomerRepository } from '../../repository/customer/customerRepository';
import { Name } from '../../../domain/type/name';

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
    await this.repository.save(
      Customer.create(1, Tel.create('11-2222-3333'), Name.create('test')),
    );
  }
}
