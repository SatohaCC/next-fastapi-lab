'use client';
import { useActionState } from 'react';

import { Button, Form, FormMessage, TextField } from '../../../../ui';
import { type SignupState, signupAction } from './actions';

export default function SignupForm() {
  const initialState: SignupState = {
    success: false,
    errors: {},
    message: '',
    prevValues: { email: '', username: '' },
  };
  const [state, formAction, isPending] = useActionState(signupAction, initialState);

  return (
    <Form title="実装例" action={formAction} validationErrors={state.errors}>
      {/* メールアドレス入力 */}
      <TextField
        name="email"
        label="メールアドレス"
        defaultValue={state.prevValues?.email}
        isDisabled={isPending}
      />

      {/* ユーザー名入力 */}
      <TextField
        name="username"
        label="ユーザー名"
        defaultValue={state.prevValues?.username}
        isDisabled={isPending}
      />

      {/* 送信ボタン */}
      <Button type="submit" isDisabled={isPending}>
        {isPending ? '確認中...' : '登録する'}
      </Button>

      {/* 成功メッセージ */}
      {state.success && <FormMessage>{state.message}</FormMessage>}
    </Form>
  );
}
