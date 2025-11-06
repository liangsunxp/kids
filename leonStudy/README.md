# Leon Study - 双前端分离项目

这是一个学习项目，包含完整的前后端分离架构，以及两个独立的前端应用。

## 项目结构

```
leonStudy/
├── backend/              # FastAPI 后端 API
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
│
├── frontend/             # 📊 博客后台管理系统
│   ├── src/              # React + Ant Design Pro
│   ├── package.json
│   ├── .umirc.ts
│   └── README.md
│
├── portal/               # 📱 博客展示门户
│   ├── src/              # React + TailwindCSS
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
├── FRONTEND_GUIDE.md     # 双前端使用指南 ⭐
├── .gitignore
└── README.md
```

## 三个应用

| 应用 | 端口 | 用途 | 技术栈 |
|------|------|------|--------|
| **Backend** | 8102 | API 服务 | FastAPI + Python |
| **Frontend** | 3000 | 后台管理 | React + Ant Design Pro |
| **Portal** | 5173 | 博客展示 | React + TailwindCSS |

## 快速开始

### 后端（FastAPI）

```bash
# 进入后端目录
cd backend

# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # macOS/Linux
# 或
venv\Scripts\activate  # Windows

# 安装依赖
pip install -r requirements.txt

# 运行应用
python main.py
```

后端将在 `http://localhost:8102` 启动

API 文档访问：
- Swagger UI: `http://localhost:8102/docs`
- ReDoc: `http://localhost:8102/redoc`

### 前端（Ant Design Pro）

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

前端将在 `http://localhost:3000` 启动

## 技术栈

### 后端
- **框架**: FastAPI
- **语言**: Python 3.8+
- **API**: RESTful API
- **CORS**: 已配置

### 前端
- **框架**: React 18 + TypeScript
- **UI 库**: Ant Design Pro
- **构建工具**: Umi 4
- **HTTP 客户端**: Axios（通过 Ant Design Pro 集成）

## 开发工作流

### 1. 启动后端服务

```bash
cd backend
python main.py  # http://localhost:8102
```

### 2. 启动前端应用

```bash
cd frontend
npm run dev     # http://localhost:3000
```

### 3. 访问应用

打开浏览器访问 `http://localhost:3000`

## API 通信

前端已配置 API 代理，所有 `/api` 请求会转发到后端。

### 示例

```typescript
// 调用后端 API
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
```

## 环境配置

### 后端环境变量

复制 `backend/.env.example` 为 `backend/.env`:

```
ENV=development
PORT=8102
HOST=0.0.0.0
FRONTEND_URL=http://localhost:3000
LOG_LEVEL=info
```

## 生产部署

### 后端部署

1. 构建 Docker 镜像或直接部署 Python 应用
2. 配置环境变量
3. 运行 Uvicorn 服务器

```bash
uvicorn main:app --host 0.0.0.0 --port 8102 --workers 4
```

### 前端部署

1. 构建项目：`npm run build`
2. 生成 `dist/` 文件夹
3. 部署到 CDN 或静态服务器
4. 配置 API 指向生产环境后端

## 常见问题

### Q: 前端无法连接后端

A: 确保：
1. 后端正在运行（`http://localhost:8102`）
2. 前端 `.umirc.ts` 中的代理配置正确
3. CORS 已正确配置

### Q: 后端返回 CORS 错误

A: 检查 `backend/main.py` 中的 CORS 配置，确保前端地址已添加到 `allow_origins`

## 下一步

- [ ] 添加数据库支持（SQLAlchemy）
- [ ] 实现用户认证（JWT）
- [ ] 完善 API 路由
- [ ] 添加错误处理和日志
- [ ] 编写单元测试
- [ ] 部署到云平台

## 参考资源

- [FastAPI 文档](https://fastapi.tiangolo.com/)
- [Ant Design Pro 文档](https://pro.ant.design/)
- [Umi 文档](https://umijs.org/)

## 许可证

MIT

