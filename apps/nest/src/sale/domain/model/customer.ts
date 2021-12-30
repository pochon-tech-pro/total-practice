import { Tel } from '../type/tel';

export class Customer {
  private readonly _tel: Tel;
  private readonly _name: string;

  private constructor(tel: Tel, name: string) {
    this._tel = tel;
    this._name = name;
  }

  static create(tel: Tel, name: string): Customer {
    return new Customer(tel, name);
  }

  static nullObject(): Customer {
    return new Customer(Tel.nullObject(), '');
  }

  public tel(): Tel {
    return this._tel;
  }

  public name(): string {
    return this._name;
  }
}
