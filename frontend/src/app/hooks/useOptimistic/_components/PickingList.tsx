'use client';
import { useActionState, useOptimistic, useTransition } from 'react';

import { togglePickingAction } from './actions';
import * as styles from './picking.css';
import type { Drug } from './types';

export function PickingList({ initialMeds }: { initialMeds: Drug[] }) {
  // 1. 真実のデータ (useActionState)
  const [meds, formAction] = useActionState(async (state: Drug[], drugId: number) => {
    // meds: 真実のデータ（サーバーと同期しているリスト）
    // formAction: 真実のデータを更新するための関数
    await togglePickingAction(null, drugId);
    return state.map((m) => (m.id === drugId ? { ...m, isPicked: !m.isPicked } : m));
  }, initialMeds);

  // 2. 楽観的なデータ (useOptimistic)
  const [optimisticMeds, addOptimisticCheck] = useOptimistic(meds, (state, targetId: number) => {
    // optimisticMeds: 楽観的なデータ（ユーザーに即座に見せるリスト）
    // addOptimisticCheck: 楽観的なデータを更新するための関数
    return state.map((m) => (m.id === targetId ? { ...m, isPicked: !m.isPicked } : m));
  });

  const [isPending, startTransition] = useTransition();
  // isPending: トランジション中の状態
  // startTransition: トランジションを開始するための関数

  const handleToggle = (drugId: number) => {
    startTransition(async () => {
      // ① 画面を即座に更新（楽観的）
      addOptimisticCheck(drugId);
      // ② サーバーアクションを実行
      await formAction(drugId);
    });
  };

  return (
    <div className={styles.container}>
      <h3>📦 ピッキングチェック表</h3>
      <ul className={styles.list}>
        {optimisticMeds.map((med) => {
          // 「現在保存中（真実と楽観が不一致）」かどうかを判定
          const isUpdating = meds.find((m) => m.id === med.id)?.isPicked !== med.isPicked;

          return (
            <li
              key={med.id}
              className={styles.listItemRecipe({ state: isUpdating ? 'updating' : 'idle' })}
            >
              <input
                type="checkbox"
                checked={med.isPicked}
                // ハンドラを呼び出す
                onChange={() => handleToggle(med.id)}
                className={styles.checkbox}
              />
              <span className={styles.itemNameRecipe({ picked: med.isPicked })}>
                {med.name}
              </span>
              {isUpdating && <small className={styles.statusText}>同期中...</small>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
