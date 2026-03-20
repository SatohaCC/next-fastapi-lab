# useTransition

## 概要

https://ja.react.dev/reference/react/useTransition

```typescript
const [isPending, startTransition] = useTransition();
```

## 前提知識

### トランジション

画面更新の優先順位を決める仕組み。
緊急性の高い更新 (urgent update) と高くない更新 (non-urgent update)を区別するためのもの。

## useTransitionの引数

なし

## useTransitionの返り値

### isPending

トランジションが保留中であるかどうかを示す isPending フラグ。

### startTransition

更新をトランジションとしてマークするための startTransition 関数。
startTransition で呼び出される関数は「アクション」と呼ばれる。

```typescript
const [isPending, startTransition] = useTransition();

// ① 入力欄の状態（緊急：ユーザーのタイピングに即座に反応させる）
const [query, setQuery] = useState<string>('');

// ② 検索結果の状態（後回し：重いフィルタリング結果を反映させる）
const [results, setResults] = useState<Medicine[]>(allMedicines);

// 入力イベントハンドラ（React.ChangeEvent 型を指定）
const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  // 【緊急】テキストボックスの表示更新
  setQuery(value);

  // 【トランジション】重い計算処理を「後回し」としてマーク
  startTransition(() => {
    const filtered = allMedicines.filter(
      (med) => med.name.includes(value) || med.ingredients.includes(value)
    );
    setResults(filtered);
  });
};
```

## startTransition

- 引数はaction。set関数を呼び出してstateを更新する関数。
- 返り値はなし -トランジションとしてマークされた state 更新は、他の state 更新によって中断される。

## トランジション内で state 更新の順番がおかしくなる

useActionStateを使うと解決できる。
