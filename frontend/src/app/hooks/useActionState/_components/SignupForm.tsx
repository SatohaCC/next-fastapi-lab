'use client';
import { useActionState } from 'react';

import { type SignupState, signupAction } from './actions';
import { errorBorder, errorText, formContainer, successText } from './form.css';

export default function SignupForm() {
  const initialState: SignupState = {
    success: false,
    errors: {},
    message: '',
    prevValues: { email: '', username: '' },
  };
  const [state, formAction, isPending] = useActionState(signupAction, initialState);

  return (
    <>
      <h2>実装例</h2>
      <form action={formAction} className={formContainer}>
        {/* メールアドレス入力 */}
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            defaultValue={state.prevValues?.email} // 送信失敗時に値を残す
            className={state.errors?.email ? errorBorder : ''}
          />
          {state.errors?.email && <p className={errorText}>{state.errors.email}</p>}
        </div>

        {/* ユーザー名入力 */}
        <div>
          <label>ユーザー名</label>
          <input
            name="username"
            defaultValue={state.prevValues?.username}
            className={state.errors?.username ? errorBorder : ''}
          />
          {state.errors?.username && <p className={errorText}>{state.errors.username}</p>}
        </div>

        {/* 送信ボタン */}
        <button type="submit" disabled={isPending}>
          {isPending ? '確認中...' : '登録する'}
        </button>

        {/* 成功メッセージ */}
        {state.success && <p className={successText}>{state.message}</p>}
      </form>
    </>
  );
}
