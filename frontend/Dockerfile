# frontend/Dockerfile
FROM node:20-alpine AS development

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 開発用コマンド
CMD ["npm", "run", "dev"]
