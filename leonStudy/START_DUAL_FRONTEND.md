# 🚀 双前端项目启动指南

## 项目概览

这个项目包含 **3 个应用**：

| 应用 | 端口 | 说明 | 启动时间 |
|------|------|------|---------|
| 🖥️ **Backend** | 8102 | FastAPI 后端 API | 5 秒 |
| 📊 **Frontend** | 3000 | 博客后台管理系统 | 30 秒 |
| 📱 **Portal** | 5173 | 博客展示门户 | 20 秒 |

---

## 快速开始（3 步，3 分钟）

### 步骤 1：启动后端（终端 1）

```bash
cd backend

# 创建虚拟环境（首次）
python -m venv venv

# 激活虚拟环境
source venv/bin/activate  # macOS/Linux
# 或
venv\Scripts\activate     # Windows

# 安装依赖（首次）
pip install -r requirements.txt

# 启动应用
python main.py
```

✅ 后端运行在 `http://localhost:8102`
✅ API 文档访问 `http://localhost:8102/docs`

### 步骤 2：启动后台管理（终端 2）

```bash
cd frontend

# 安装依赖（首次）
npm install

# 启动开发服务器
npm run dev
```

✅ 后台管理运行在 `http://localhost:3000`

### 步骤 3：启动博客门户（终端 3）

```bash
cd portal

# 安装依赖（首次）
npm install

# 启动开发服务器
npm run dev
```

✅ 博客门户运行在 `http://localhost:5173`

---

## 验证应用是否正常运行

在浏览器中打开以下地址：

### 1. 访问后台管理
```
http://localhost:3000
```
应该看到 Ant Design Pro 的仪表板

### 2. 访问博客门户
```
http://localhost:5173
```
应该看到优雅的博客展示页面

### 3. 查看 API 文档
```
http://localhost:8102/docs
```
应该看到 Swagger UI 的 API 文档

---

## 应用说明

### 后台管理 (Frontend - http://localhost:3000)

**用途**
- 📝 文章管理（创建、编辑、删除）
- 👥 用户管理
- 📊 统计分析
- ⚙️ 系统设置

**技术栈**
- React 18 + TypeScript
- Ant Design Pro（企业级 UI 库）
- Umi 4 框架

**示例页面**
- 仪表盘 (Dashboard)
- 用户列表 (Users)
- 关于页面 (About)

### 博客门户 (Portal - http://localhost:5173)

**用途**
- 📖 博客文章展示
- 🔍 文章浏览
- 👤 关于页面
- 💬 用户交互

**技术栈**
- React 18 + TypeScript
- TailwindCSS（实用优先的 CSS 框架）
- React Router

**示例页面**
- 首页 (Home) - 最新文章和统计
- 博客列表 (Blog) - 所有文章和分类筛选
- 文章详情 (BlogDetail) - 完整文章内容
- 关于 (About) - 个人信息

### 后端 API (Backend - http://localhost:8102)

**用途**
- 提供 RESTful API
- 处理业务逻辑
- 数据存储和验证

**技术栈**
- FastAPI (Python)
- Pydantic 数据验证
- Uvicorn ASGI 服务器

---

## 开发工作流

### 场景 1：全栈开发（开发完整的博客系统）

启动所有 3 个应用：
1. 后端处理数据和业务逻辑
2. 后台管理创建和编辑内容
3. 博客门户展示内容给用户

### 场景 2：只开发后台管理系统

```bash
# 启动后端
cd backend && python main.py

# 启动后台
cd frontend && npm run dev
```

只需要这两个应用

### 场景 3：只开发博客展示网站

```bash
# 启动后端
cd backend && python main.py

# 启动门户
cd portal && npm run dev
```

只需要这两个应用

### 场景 4：只开发后端 API

```bash
cd backend && python main.py
```

单独启动后端，使用 http://localhost:8102/docs 测试 API

---

## 文件修改热重载

### 后端热重载
- 修改 `backend/main.py` 中的代码后，应用会自动重启
- 刷新浏览器即可看到变化

### 后台管理热重载
- 修改 `frontend/src/` 中的代码后，页面会自动刷新
- 通常在 1-2 秒内更新

### 博客门户热重载
- 修改 `portal/src/` 中的代码后，页面会自动刷新
- 通常在 1-2 秒内更新

---

## API 通信

两个前端都通过 HTTP 请求与后端通信：

### 基础 URL

**开发环境**
```
后台管理: http://localhost:3000 → http://localhost:8102/api/*
博客门户: http://localhost:5173 → http://localhost:8102/api/*
```

**生产环境**
```
后台管理: https://example.com/admin → https://api.example.com/*
博客门户: https://example.com → https://api.example.com/*
```

### API 示例

```typescript
// 获取文章列表
fetch('/api/posts')
  .then(res => res.json())
  .then(data => console.log(data))

// 创建文章
fetch('/api/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: '...', content: '...' })
})

// 更新文章
fetch('/api/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: '新标题' })
})

// 删除文章
fetch('/api/posts/1', { method: 'DELETE' })
```

---

## 常见问题

### Q: 端口被占用怎么办？

A: 查找并杀死占用的进程

**macOS/Linux:**
```bash
lsof -i :8102  # 查找占用 8102 端口的进程
lsof -i :3000  # 查找占用 3000 端口的进程
lsof -i :5173  # 查找占用 5173 端口的进程

kill -9 <PID>  # 杀死进程
```

**Windows:**
```bash
netstat -ano | findstr :8102
taskkill /PID <PID> /F
```

### Q: npm install 失败怎么办？

A: 尝试以下方法

```bash
# 清除 npm 缓存
npm cache clean --force

# 使用淘宝镜像（中国用户）
npm config set registry https://registry.npmmirror.com

# 重新安装
rm -rf node_modules package-lock.json
npm install
```

### Q: 后台管理无法连接后端？

A: 检查以下几点

1. 后端是否正在运行：`http://localhost:8102/docs`
2. 代理配置：查看 `.umirc.ts` 中的 proxy 设置
3. CORS 配置：查看 `backend/main.py` 中的 CORS 设置
4. 浏览器开发者工具（F12）中的 Network 标签

### Q: 博客门户无法连接后端？

A: 检查以下几点

1. 后端是否正在运行：`http://localhost:8102/docs`
2. 代理配置：查看 `portal/vite.config.ts` 中的 proxy 设置
3. 浏览器开发者工具（F12）中的 Network 标签

---

## 项目导航

### 文档
- 📄 **FRONTEND_GUIDE.md** - 双前端详细指南
- 📄 **QUICKSTART.md** - 5 分钟快速开始
- 📄 **ARCHITECTURE.md** - 系统架构设计
- 📄 **DEVELOPMENT.md** - 完整开发指南
- 📄 **PROJECT_STRUCTURE.md** - 项目结构详解

### 应用
- 📁 **backend/** - FastAPI 后端
- 📁 **frontend/** - Ant Design Pro 后台
- 📁 **portal/** - TailwindCSS 门户

---

## 构建和部署

### 构建后台管理

```bash
cd frontend
npm run build
# 生成 dist/ 文件夹
# 上传到服务器的 /admin 目录
```

### 构建博客门户

```bash
cd portal
npm run build
# 生成 dist/ 文件夹
# 上传到服务器的 / 目录
```

### 部署后端

```bash
cd backend
# 使用 Gunicorn + Uvicorn
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8102
```

---

## 下一步

### 立即开始
1. 按照上面的 3 步启动所有应用
2. 在浏览器中打开各个应用
3. 尝试在后台管理中创建内容
4. 在博客门户中查看内容

### 继续学习
1. 阅读 **FRONTEND_GUIDE.md** 了解两个前端的区别
2. 查看每个应用的 README.md
3. 探索代码，理解架构
4. 开始自定义和开发

### 添加功能
- [ ] 后端：添加数据库支持
- [ ] 后端：实现用户认证
- [ ] 后台：完善文章管理
- [ ] 门户：连接 API 获取真实数据
- [ ] 门户：添加评论功能

---

## 技术栈概览

```
┌─────────────────────────────────────────┐
│         用户浏览器                      │
└───────┬─────────────────────────────────┘
        │
   ┌────┴──────┬──────────┐
   │            │          │
   ▼            ▼          ▼
┌─────────┐ ┌─────────┐ ┌──────────┐
│后台管理  │ │博客门户  │ │  API文档 │
│Port:3000 │ │Port:5173 │ │Port:8102 │
│React    │ │React    │ │Swagger  │
│Ant Dsgn │ │Tailwind │ │         │
└────┬────┘ └────┬────┘ └────┬─────┘
     │           │           │
     └───────────┼───────────┘
                 │ HTTP REST API
                 ▼
         ┌──────────────┐
         │  Backend     │
         │  Port: 8102  │
         │  FastAPI     │
         │  Python      │
         └──────────────┘
                 │
                 ▼
         ┌──────────────┐
         │  Database    │
         │  (Optional)  │
         └──────────────┘
```

---

## 祝你开发愉快！🎉

现在你已经有了一个完整的双前端项目框架。开始构建你的博客系统吧！

**需要帮助？** 查看相关文档或在代码中添加注释。

**Ready to code?** 让我们开始吧！🚀

