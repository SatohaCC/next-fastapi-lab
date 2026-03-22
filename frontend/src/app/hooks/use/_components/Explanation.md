# use

## 概要

https://ja.react.dev/reference/react/use

```typescript
const value = use(resource);
```

## 前提知識

### コンテクスト

props 受け渡しの代替手段

### ErrorBoundary

クラッシュした部位の代わりに、例えばエラーメッセージなどのフォールバック UI を表示するための、特別なコンポーネント。
https://ja.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
Reactが提供しているわけではなく、自分で作成する必要がある。

### Promise

非同期処理の結果を表すオブジェクト。
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

> 待機 (pending): 初期状態。成功も失敗もしていません。
> 履行 (fulfilled): 処理が成功して完了したことを意味します。
> 拒否 (rejected): 処理が失敗したことを意味します。

## useの引数

### resource

値を読み取りたいデータソース。
リソースはプロミスまたはコンテクストのいずれか。

- コンテクストの場合、最も近いコンテクストプロバイダ (context provider)から値を返す

## useの返り値

use API は、プロミスの解決された値やコンテクストなど、リソースから読み取った値を返します。

### 注意点

サーバコンポーネントでデータをフェッチする際は、use よりも async と await を優先して使用する。

| 使う場所         | 使うべき道具  | 理由                                                                |
| ---------------- | ------------- | ------------------------------------------------------------------- |
| Server Component | async / await | 処理を「続き」から進められるので、サーバーの負荷が低い。            |
| Client Component | use           | async が使えない場所（レンダー中）で、Suspense と連携して待つため。 |

## 拒否されたプロミスの取り扱い

- エラーバウンダリを使ってユーザにエラーを表示する
- Promise.catch で代替値を提供する
