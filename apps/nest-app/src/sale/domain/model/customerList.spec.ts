import { Customer } from './customer';
import { Tel } from '../type/tel';
import { Name } from '../type/name';
import { CustomerList } from './customerList';

describe('会員リスト', () => {
  describe('生成の検証', () => {
    let list: CustomerList;

    beforeAll(() => {
      list = CustomerList.create(
        ...[
          Customer.create(
            1,
            Tel.create('03-1111-2222'),
            Name.create('山田太郎'),
          ),
          Customer.create(
            2,
            Tel.create('03-1111-3333'),
            Name.create('山田二郎'),
          ),
        ],
      );
    });

    it('名前の取得', async () => {
      expect(list.first().name().value()).toBe('山田太郎');
    });

    it('電話番号の取得', async () => {
      expect(list.first().tel().value()).toBe('03-1111-2222');
    });
  });

  describe('不正な生成の検証', () => {
    it('不正なIDである', async () => {
      try {
        Customer.create(
          -1000,
          Tel.create('03-1111-2222'),
          Name.create('山田太郎'),
        );
        throw new Error('生成されてしまっている'); // 生成できてしまっているので強制的失敗 https://komajou.hatenablog.jp/entry/2019/04/02/181246
      } catch (e) {
        expect(e).toEqual(new Error('idは正の整数以外受け付けません。'));
      }
    });
  });
});
