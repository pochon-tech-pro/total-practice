import { Tel } from '../../../domain/type/tel';
import { Customer } from '../../../domain/model/customer';

export interface ICustomerRepository {
  findByTel(tel: Tel): Promise<Customer>;
}
export const ICustomerRepository = Symbol('ICustomerRepository');
