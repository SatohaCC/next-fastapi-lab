# useActionState

## 概要

https://ja.react.dev/reference/react/useActionState

```typescript
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
```

## 前提知識

### プログレッシブエンハンスメント

可能な限り多くのユーザーに不可欠なコンテンツと機能のベースラインを提供することを中心とした設計哲学
Reactの場合、Javascriptが使えない環境でも、最低限の機能は使えるようにする。
permalinkを使用することで、JavaScriptが動かない環境でも、フォームの送信先を指定できる。

### ハイドレーション

サーバーから送られてきたHTMLに、Reactがイベントリスナーなどを付与して、インタラクティブなアプリケーションに変換する処理。
JavaScriptが動かない環境では、この処理は行われない。

### トランジション

画面更新の優先順位を決める仕組み。
緊急性の高い更新 (urgent update) と高くない更新 (non-urgent update)を区別するためのものです。

## useActionStateの引数

### fn

フォームが送信されたりボタンが押されたりしたときに呼び出される関数。
`(prevState, formData) => newState` の形の関数。
この関数が呼び出される際には、1番目の引数としてはフォームの前回stateを受け取る。
前回stateは、初回は渡したinitialState、2回目以降は前回の返り値を受け取る。
次の引数（formDataなど）としてはフォームアクションが通常受け取る引数を受け取る。

### initialState

アクションの最初の state 値。
シリアライズ可能な任意の値（オブジェクト、配列、プリミティブなど）を取る。（JSONで表現きるもの？）
この引数はアクションが一度呼び出された後は無視される。

### permalink

JS がまだ動いていない時に、どこにデータを送るかを指定する
指定したURLにいって、そこでフォームの結果を表示する。
JSが動いたあと（ハイドレーション後）は、この引数は無視されるので、あまり使われない？

## useActionStateの返り値

### state

現在の state 値。
初回は渡したinitialState、2回目以降は前回の返り値を受け取る。

### formAction

下記のように使われる。

`<form action={formAction}>`
`<button formAction={formAction}>`

### isPending

進行中のトランジションがあるかどうかを表すブール値。
処理中ならtrue、それ以外ならfalse。

## useActionStateの利点

### 非同期処理を扱いやすい
