'use client';

import { Suspense, useState, useTransition } from 'react';

import { Button } from '../../../../ui';
import { ErrorBoundary } from './ErrorBoundary';
import { StockDisplay } from './StockDisplay';
import { StockData, fetchStockData } from './api';
import {
  card,
  container,
  description,
  header,
  skeletonError,
  skeletonLoading,
  title,
} from './demo.css';

export default function DemoContainer({
  initialStockPromise,
}: {
  initialStockPromise: Promise<StockData>;
}) {
  // Promise の状態を state として保持する
  const [stockPromise, setStockPromise] = useState(() => initialStockPromise);
  // トランジションを用いて状態更新を行うことで、ローディング中のUIブロックを防ぎます
  const [isPending, startTransition] = useTransition();

  const handleReload = () => {
    startTransition(() => {
      setStockPromise(fetchStockData('med-123'));
    });
  };

  return (
    <div className={container}>
      <div className={header}>
        <h2 className={title}>React use Hook Demo</h2>
        <p className={description}>
          Suspense と ErrorBoundary を用いたデータの非同期取得のデモンストレーション。 わざと 30%
          の確率でエラーが発生するようにしています。
        </p>
      </div>

      <Button onPress={handleReload} isDisabled={isPending}>
        {isPending ? '更新中...' : 'データを再取得'}
      </Button>

      <div className={card}>
        {/* ErrorBoundary は内部で throw されたエラーをキャッチし、fallback を表示します */}
        <ErrorBoundary
          fallback={(error, reset) => (
            <div className={skeletonError}>
              <p>🚫 {error.message}</p>
              <Button variant="danger" size="sm" onPress={reset}>
                もう一度試す
              </Button>
            </div>
          )}
          onReset={handleReload}
        >
          {/* Suspense は内部のコンポーネントが Suspend （サスペンド）した際に fallback を表示します */}
          <Suspense
            fallback={
              <div className={skeletonLoading}>
                <span>📦</span>
                <span>在庫サーバーに接続中...</span>
              </div>
            }
          >
            <StockDisplay stockPromise={stockPromise} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
