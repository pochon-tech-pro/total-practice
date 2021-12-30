export class Tel {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(value: string): Tel {
    return new Tel(value);
  }

  static nullObject(): Tel {
    return new Tel('');
  }

  public value(): string {
    return this._value;
  }
}
