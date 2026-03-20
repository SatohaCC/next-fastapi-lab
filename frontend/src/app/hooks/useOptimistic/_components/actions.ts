'use server';

export async function togglePickingAction(prevState: any, drugId: number) {
  // サーバーでのDB更新をシミュレーション（1秒かかる）
  await new Promise((res) => setTimeout(res, 1000));

  // 本来はここでDBのステータスを反転させて返す
  return drugId;
}
