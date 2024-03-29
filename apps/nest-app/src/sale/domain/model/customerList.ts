import { Customer } from './customer';

export class CustomerList {
  private readonly _list: Customer[];

  private constructor(...list: Customer[]) {
    this._list = list;
  }

  static create(...list: Customer[]): CustomerList {
    return new CustomerList(...list);
  }

  static nullObject(): CustomerList {
    return new CustomerList();
  }

  public value(): Customer[] {
    return this._list;
  }

  public first(): Customer {
    return this._list.length > 0 ? this._list[0] : Customer.nullObject();
  }
}
