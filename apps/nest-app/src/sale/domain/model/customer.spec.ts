import { Customer } from './customer';
import { Tel } from '../type/tel';

describe('会員', () => {
  describe('生成の検証', () => {
    let customer;

    beforeAll(() => {
      customer = Customer.create(Tel.create('03-1111-2222'), '山田太郎');
    });

    it('名前の取得', async () => {
      expect(customer.name()).toBe('山田太郎');
    });

    it('電話番号の取得', async () => {
      expect(customer.tel().value()).toBe('03-1111-2222');
    });
  });
});
