export class Name {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(value: string): Name {
    return new Name(value);
  }

  static nullObject(): Name {
    return new Name('');
  }

  public value(): string {
    return this._value;
  }
}
