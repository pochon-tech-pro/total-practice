## 設計
三層＋ドメイン層のアーキテクチャを採用しています。  

![Alt text](./3-domain.svg)

ディレクトリ構成は次のような感じになります。  

```
src/
   ├ BoundaryContext/    ... 境界づけられたコンテキスト
   │   ├ domain/         ... ドメイン層
   │   │   ├ model/         ... ドメインモデル
   │   │   └ type/          ... 基本型
   │   ├ app/            ... アプリケーション層
   │   │   ├ service/        ... アプリケーションサービス
   │   │   └ repository/     ... リポジトリ（If)
   │   ├ infra/          ... インフラ層
   │   │   ├ entities/       ... ORM
   │   │   └ repository/     ... リポジトリ（Impl)
   │   └ ui/             ... プレゼンテーション層
   └ context.module.ts   ... DI
```

