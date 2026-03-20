'use client';
import { ChangeEvent, useState, useTransition } from 'react';

import { allMedicines } from './data';
import { Medicine } from './types';
import * as styles from './search.css';

export default function MedicineSearch() {
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

  return (
    <div className={styles.container}>
      <h3>💊 医薬品在庫・成分検索システム</h3>

      <input
        type="text"
        className={styles.inputField}
        value={query}
        onChange={handleSearch}
        placeholder="薬品名または成分名を入力..."
      />

      {/* 検索中の視覚的フィードバック */}
      <div
        className={styles.resultWrapper}
        data-pending={isPending}
      >
        {isPending && (
          <p className={styles.loadingText}>🔍 データベース照会中...</p>
        )}

        <div className={styles.listContainer}>
          {results.length > 0 ? (
            results.map((med) => (
              <div key={med.id} className={styles.itemCard}>
                <div className={styles.itemName}>{med.name}</div>
                <div className={styles.itemDetails}>
                  成分: {med.ingredients} | 分類: {med.category}
                </div>
              </div>
            ))
          ) : (
            <p>該当する医薬品は見つかりませんでした。</p>
          )}
        </div>
      </div>
    </div>
  );
}
