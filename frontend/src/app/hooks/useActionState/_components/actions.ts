'use server';

export async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

export type SignupState = {
  success: boolean;
  errors: {
    email?: string;
    username?: string;
  };
  message: string;
  prevValues: {
    email: string;
    username: string;
  };
};

export async function signupAction(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  // 1. 少し時間をかけて処理するシミュレーション（ネットワーク遅延など）
  await new Promise((res) => setTimeout(res, 1000));

  const email = (formData.get('email') as string) || '';
  const username = (formData.get('username') as string) || '';

  console.log('signupAction received:', { email, username });

  const errors: any = {};

  // 2. バリデーションロジック
  if (!email.includes('@')) {
    errors.email = '有効なメールアドレスを入力してください。';
  }
  if (username.length < 3) {
    errors.username = 'ユーザー名は3文字以上必要です。';
  }

  // 3. エラーがある場合は、エラー情報を返却（これが次の prevState になる）
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: '', // 明示的に空文字を返す
      prevValues: { email, username }, // 入力値を保持して、消えないようにする
    };
  }

  // 4. 成功した場合
  return {
    success: true,
    errors: {},
    message: '登録が完了しました！',
    prevValues: { email: '', username: '' }, // 成功時には空にする
  };
}
