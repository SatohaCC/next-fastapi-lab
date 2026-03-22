export type StockData = { id: string; name: string; count: number };

export function fetchStockData(id: string): Promise<StockData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30%の確率でAPIエラーをシミュレートし、ErrorBoundaryの動作をテストする
      if (Math.random() < 0.3) {
        reject(new Error('在庫データの取得に失敗しました。'));
      } else {
        resolve({
          id,
          name: 'ロキソプロフェン',
          count: Math.floor(Math.random() * 500) + 10,
        });
      }
    }, 1500); // 1.5秒の遅延でSuspenseの表示効果をわかりやすくする
  });
}
