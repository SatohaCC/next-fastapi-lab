# useOptimistic

## 概要

- サーバーからの返事を待たずにUIを即時に書き換えることでユーザー体験があがる。
- https://ja.react.dev/reference/react/useOptimistic

```typescript
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

### SWRだとこのへん。

https://swr.vercel.app/ja/docs/mutation#optimistic-updates

## 前提知識

### 楽観的更新(Optimistic Updates)

サーバーからの返事を待たずに、画面を先に『成功した体（てい）』で書き換えてしまう手法。

## useOptimisticの引数

### state

初期状態や、実行中のアクションが存在しない場合に返される値。

### updateFn

updateFn(currentState, optimisticValue)

- currentState: 現在のstate
- optimisticValue: addOptimisticに渡された楽観的更新に使用する値
  - merge and return new stateとあるように返り値が新しいstateになる。
  - 返り値は currentState に optimisticValue の値を反映させたもの。

```typescript
import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // merge and return new state
      // with optimistic value
    }
  );
}
```

## useOptimisticの返り値

### optimisticState

ユーザーが目に見えているデータ。

- 実行中のアクションがない場合は state と等しくなり、何らかのアクションが実行中の場合は updateFn が返す値と等しくなります。
- 結果としての楽観的 state。アクション注のデータが書き換わったあとの予想図。

### addOptimistic

楽観的な更新を行う際に呼び出すためのディスパッチ関数。
任意の型の引数 optimisticValue を 1 つだけ受け取ります。
それにより、state と optimisticValue を引数にして updateFn が呼び出される。

```typescript

```
