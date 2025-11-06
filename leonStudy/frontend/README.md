# 前端应用 - Ant Design Pro

这是项目的前端部分，基于 Ant Design Pro 框架。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:8000` 启动

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 项目结构

```
frontend/
├── src/
│   ├── pages/           # 页面组件
│   │   ├── Dashboard.tsx
│   │   ├── Users.tsx
│   │   └── About.tsx
│   ├── components/      # 公共组件
│   ├── services/        # API 服务
│   ├── app.tsx         # 应用配置
│   └── index.tsx       # 入口文件
├── .umirc.ts           # Umi 配置
├── tsconfig.json       # TypeScript 配置
├── package.json        # 项目依赖
└── README.md          # 项目说明
```

## API 代理配置

前端已配置代理，`/api` 路径会自动转发到后端 API。

```typescript
// .umirc.ts
proxy: {
  '/api': {
    target: 'http://localhost:8102',
    changeOrigin: true,
  },
},
```

## 与后端通信

后端运行在 `http://localhost:8102`，前端在 `http://localhost:3000`。

### 调用后端 API

```typescript
// 使用完整 URL
fetch('http://localhost:8102/api/users')

// 或使用代理（自动转发）
fetch('/api/users')
```

## 开发指南

- 页面组件放在 `src/pages/` 目录
- 公共组件放在 `src/components/` 目录
- API 调用逻辑放在 `src/services/` 目录
- 使用 TypeScript 编写代码

## 部署

### 开发环境

前端和后端分别运行：
- 前端: `npm run dev`
- 后端: `python main.py`

### 生产环境

1. 构建前端：`npm run build` 生成 `dist/` 目录
2. 部署后端：部署 FastAPI 应用
3. 配置前端 API 指向生产环境后端

