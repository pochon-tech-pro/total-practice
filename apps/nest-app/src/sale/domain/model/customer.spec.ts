import { Customer } from './customer';
import { Tel } from '../type/tel';
import { Name } from '../type/name';

describe('会員', () => {
  describe('生成の検証', () => {
    let customer;

    beforeAll(() => {
      customer = Customer.create(
        1,
        Tel.create('03-1111-2222'),
        Name.create('山田太郎'),
      );
    });

    it('名前の取得', async () => {
      expect(customer.name().value()).toBe('山田太郎');
    });

    it('電話番号の取得', async () => {
      expect(customer.tel().value()).toBe('03-1111-2222');
    });
  });

  describe('NullObjectの検証', () => {
    let customer;

    beforeAll(() => {
      customer = Customer.nullObject();
    });

    it('名前が空文字列である', async () => {
      expect(customer.name().value()).toBe('');
    });

    it('電話番号が空文字列である', async () => {
      expect(customer.tel().value()).toBe('');
    });
  });
});
