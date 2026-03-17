# Next.js + FastAPI Lab

学習したものを試すためのリポジトリ。


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
│   ├── Dockerfile     # コンテナイメージ定義 (Web UI)
│   └── ...
└── docker-compose.yml # 開発用コンテナ起動設定
```
