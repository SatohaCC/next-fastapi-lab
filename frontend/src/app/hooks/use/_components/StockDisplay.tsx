'use client';

import { use } from 'react';
import { StockData } from './api';
import { cardText, cardValue } from './demo.css';

export function StockDisplay({ stockPromise }: { stockPromise: Promise<StockData> }) {
  // ★ `use` 関数を用いることで、Promiseが解決するまでコンポーネントのレンダーを中断(Suspend)し、
  // 解決したらその値を用いてレンダーを再開します。
  const stock = use(stockPromise);

  return (
    <div className={cardText}>
      <span>{stock.name} の在庫数</span>
      <strong className={cardValue}>{stock.count} 錠</strong>
    </div>
  );
}
