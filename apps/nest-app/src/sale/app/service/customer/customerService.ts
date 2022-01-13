import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../../../domain/model/customer';
import { QueryParameters } from '../../../ui/customer/queryParameters';
import { Tel } from '../../../domain/type/tel';
import { ICustomerRepository } from '../../repository/customer/customerRepository';
import { Name } from '../../../domain/type/name';
import { CustomerList } from '../../../domain/model/customerList';
import { PostParameters } from '../../../ui/customer/postParameters';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async find(params: QueryParameters): Promise<Customer> {
    return this.repository.findByTel(Tel.create(params.tel));
  }

  async findAll(): Promise<CustomerList> {
    return this.repository.findAll();
  }

  async save(body: PostParameters): Promise<void> {
    await this.repository.save(
      Customer.create(null, Tel.create(body.tel), Name.create(body.name)),
    );
  }

  async allDelete() {
    await this.repository.deleteAll();
    await this.repository.save(
      Customer.create(
        null,
        Tel.create('03-1111-2222'),
        Name.create('DefaultUser'),
      ),
    );
  }
}
