import { Tel } from '../type/tel';
import { Name } from '../type/name';

export class Customer {
  private readonly _id?: number;
  private readonly _tel: Tel;
  private readonly _name: Name;

  private constructor(id: number, tel: Tel, name: Name) {
    this._id = id;
    this._tel = tel;
    this._name = name;
  }

  static create(id: number, tel: Tel, name: Name): Customer {
    if (id !== null && id < 0) {
      throw new Error('idは正の整数以外受け付けません。');
    }
    return new Customer(id, tel, name);
  }

  static reConstructor(id: number, tel: string, name: string): Customer {
    return new Customer(id, Tel.create(tel), Name.create(name));
  }

  static nullObject(): Customer {
    return new Customer(0, Tel.nullObject(), Name.nullObject());
  }

  public id(): number {
    return this._id;
  }

  public tel(): Tel {
    return this._tel;
  }

  public name(): Name {
    return this._name;
  }
}
