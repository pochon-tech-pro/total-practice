import { Tel } from '../../../domain/type/tel';
import { Customer } from '../../../domain/model/customer';
import { CustomerList } from '../../../domain/model/customerList';

export interface ICustomerRepository {
  findByTel(tel: Tel): Promise<Customer>;

  findAll(): Promise<CustomerList>;

  save(customer: Customer): Promise<void>;
}

export const ICustomerRepository = Symbol('ICustomerRepository');
