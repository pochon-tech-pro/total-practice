import { Tel } from '../type/tel';
import { Name } from '../type/name';

export class Customer {
  private readonly _tel: Tel;
  private readonly _name: Name;

  private constructor(tel: Tel, name: Name) {
    this._tel = tel;
    this._name = name;
  }

  static create(tel: Tel, name: Name): Customer {
    return new Customer(tel, name);
  }

  static nullObject(): Customer {
    return new Customer(Tel.nullObject(), Name.nullObject());
  }

  public tel(): Tel {
    return this._tel;
  }

  public name(): Name {
    return this._name;
  }
}
