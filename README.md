# Next.js + FastAPI Lab

学習したものを試すためのリポジトリ。

フロントはローカルで動かし、バックエンドはDockerコンテナで動かします。

---

## 📁 ディレクトリ構造

```text
nextjs-fastapi-lab/
├── .devcontainer/     # バックエンド開発用 Devcontainer 設定
├── backend/           # FastAPI (Python) アプリケーション一式
│   ├── main.py        # API エントリーポイント
│   ├── Dockerfile     # コンテナイメージ定義 (API)
│   └── requirements.txt
├── frontend/          # Next.js (Node.js/React) アプリケーション一式
│   ├── package.json   # 依存パッケージ定義
│   └── ...            # (ローカル実行)
└── docker-compose.yml # バックエンド開発用コンテナ起動設定
```

## 🚀 起動方法

### 1. バックエンド (FastAPI) の起動

Docker Compose を使用して起動します。

```bash
docker compose up -d
```

起動後、APIドキュメントには [http://localhost:8000/docs](http://localhost:8000/docs) でアクセスできます。

### 2. フロントエンド (Next.js) の起動

Node.js環境を使用してローカルで起動します。（`frontend` ディレクトリ内でコマンドを実行します）

```bash
cd frontend
npm install
npm run dev
```

起動後、アプリには [http://localhost:3000](http://localhost:3000) でアクセスできます。
