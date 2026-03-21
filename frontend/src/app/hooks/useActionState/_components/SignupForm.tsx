'use client';
import { useActionState } from 'react';

import { type SignupState, signupAction } from './actions';
import * as styles from './form.css';

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
      <h2 className={styles.titleText}>実装例</h2>
      <form action={formAction} className={styles.formContainer}>
        {/* メールアドレス入力 */}
        <div className={styles.fieldWrapper}>
          <label className={styles.label}>メールアドレス</label>
          <input
            name="email"
            defaultValue={state.prevValues?.email} // 送信失敗時に値を残す
            disabled={isPending}
            className={styles.inputRecipe({ invalid: !!state.errors?.email })}
          />
          {state.errors?.email && <p className={styles.errorText}>{state.errors.email}</p>}
        </div>

        {/* ユーザー名入力 */}
        <div className={styles.fieldWrapper}>
          <label className={styles.label}>ユーザー名</label>
          <input
            name="username"
            defaultValue={state.prevValues?.username}
            disabled={isPending}
            className={styles.inputRecipe({ invalid: !!state.errors?.username })}
          />
          {state.errors?.username && <p className={styles.errorText}>{state.errors.username}</p>}
        </div>

        {/* 送信ボタン */}
        <button type="submit" disabled={isPending} className={styles.buttonRecipe({ visual: 'solid' })}>
          {isPending ? '確認中...' : '登録する'}
        </button>

        {/* 成功メッセージ */}
        {state.success && <p className={styles.successText}>{state.message}</p>}
      </form>
    </>
  );
}
