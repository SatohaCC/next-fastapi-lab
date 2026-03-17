# backend/Dockerfile

# --- 共通のベースイメージ ---
FROM python:3.11-slim AS base
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# --- ビルドステージ（依存関係のインストール） ---
FROM base AS builder
RUN apt-get update && apt-get install -y --no-install-recommends gcc build-essential
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# --- 開発用ステージ (DevContainer/Local用) ---
FROM base AS development
COPY --from=builder /install /usr/local
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

# --- 本番用ステージ (AWS用) ---
FROM base AS production
# builderでインストールしたライブラリだけをコピーして軽量化
COPY --from=builder /install /usr/local
COPY . .
# セキュリティのため非ルートユーザーで実行するのが望ましい（今回は簡略化）
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
