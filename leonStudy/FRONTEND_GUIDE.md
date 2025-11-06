# 双前端项目指南

本项目包含两个独立的前端应用，分别用于不同的目的。

---

## 项目结构

```
leonStudy/
├── backend/              # FastAPI 后端 API
│
├── frontend/             # 📊 博客后台管理系统
│   ├── src/
│   │   ├── pages/        # Ant Design Pro 页面
│   │   └── ...
│   ├── package.json
│   ├── .umirc.ts         # Umi 配置
│   └── README.md
│
├── portal/               # 📱 博客展示门户
│   ├── src/
│   │   ├── pages/        # TailwindCSS 页面
│   │   └── ...
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
│
└── backend/
    ├── main.py
    └── ...
```

---

## 两个前端的对比

### 1. Frontend - 博客后台管理系统 📊

**用途**
- 博客文章管理（创建、编辑、删除）
- 用户管理
- 统计分析
- 系统设置

**技术栈**
- React 18 + TypeScript
- Ant Design Pro（企业级 UI 组件库）
- Umi 4（框架）
- 后端管理系统完整功能

**特点**
- ✅ 功能完整、组件丰富
- ✅ 适合企业应用
- ✅ 权限管理支持
- ✅ 数据表格、表单等复杂组件

**启动方式**
```bash
cd frontend
npm install
npm run dev
# http://localhost:3000
```

### 2. Portal - 博客展示门户 📱

**用途**
- 博客文章展示
- 文章浏览
- 关于页面
- 用户交互（评论、订阅等）

**技术栈**
- React 18 + TypeScript
- TailwindCSS（实用优先的 CSS 框架）
- React Router
- 轻量级、高性能

**特点**
- ✅ 设计简洁、性能优秀
- ✅ 适合内容展示
- ✅ 响应式设计
- ✅ 轻量级、快速加载

**启动方式**
```bash
cd portal
npm install
npm run dev
# http://localhost:5173
```

---

## 功能对应关系

### Frontend（后台管理）
```
仪表盘
├─ 概览（访问量、文章数等统计）
├─ 最近文章
└─ 系统状态

文章管理
├─ 文章列表
├─ 创建文章
├─ 编辑文章
└─ 删除文章

用户管理
├─ 用户列表
├─ 创建用户
├─ 编辑用户权限
└─ 删除用户

系统设置
├─ 基本配置
├─ SEO 设置
└─ API 配置
```

### Portal（前端展示）
```
首页
├─ 博客简介
├─ 最新文章卡片
├─ 统计数据
└─ 订阅区域

博客列表页
├─ 所有文章列表
├─ 分类筛选
├─ 搜索功能
└─ 分页

文章详情页
├─ 完整文章内容
├─ 元数据（作者、日期、阅读时间）
├─ 相关文章推荐
└─ 评论区

关于页面
├─ 个人介绍
├─ 技能列表
├─ 联系方式
└─ 博客统计
```

---

## 开发流程

### 场景 1：完整的博客系统开发

1. **启动后端**
```bash
cd backend
python main.py  # http://localhost:8102
```

2. **启动后台管理**
```bash
cd frontend
npm run dev  # http://localhost:3000
```

3. **启动门户网站**
```bash
cd portal
npm run dev  # http://localhost:5173
```

4. **后端 API 测试**
访问 `http://localhost:8102/docs` 查看 API 文档

### 场景 2：只开发后台管理系统

```bash
cd frontend
npm run dev
```

只需启动 frontend 和 backend

### 场景 3：只开发博客展示门户

```bash
cd portal
npm run dev
```

只需启动 portal 和 backend

---

## API 通信

### 共同的 API 端点

两个前端都通过以下方式调用后端 API：

#### Frontend（后台）
```bash
/api/articles     # 获取文章列表
/api/articles/:id # 获取文章详情
/api/users        # 获取用户列表
/api/stats        # 获取统计数据
```

#### Portal（前端）
```bash
/api/articles     # 获取文章列表（用于展示）
/api/articles/:id # 获取文章详情
/api/comments     # 获取评论
```

### 环境配置

#### Frontend (.umirc.ts)
```typescript
proxy: {
  '/api': {
    target: 'http://localhost:8102',
    changeOrigin: true,
  },
}
```

#### Portal (vite.config.ts)
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8102',
      changeOrigin: true,
    },
  },
}
```

---

## 部署策略

### 开发环境

```
┌─────────────┐
│  Frontend   │ (localhost:3000) - 后台管理
│  Portal     │ (localhost:5173) - 博客展示
│  Backend    │ (localhost:8102) - API
└─────────────┘
```

### 生产环境

```
┌───────────────────────────────────────────┐
│ Nginx 反向代理                            │
├───────────────────────────────────────────┤
│                                           │
│ example.com/admin     → Frontend (后台)   │
│ example.com/          → Portal (博客)     │
│ api.example.com/api/* → Backend API       │
│                                           │
└───────────────────────────────────────────┘
```

---

## 部署步骤

### Frontend（后台管理）部署

```bash
cd frontend
npm run build
# 生成 dist/ 文件夹
# 上传到 web 服务器的 /admin 目录
```

### Portal（博客展示）部署

```bash
cd portal
npm run build
# 生成 dist/ 文件夹
# 上传到 web 服务器的 / 目录
```

### Backend（后端）部署

```bash
cd backend
# 使用 Gunicorn + Uvicorn 部署
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker
```

---

## 常见问题

### Q: 两个前端如何共享代码？

A: 可以创建一个共享的组件库：
```
libs/
├── common/           # 公共组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── utils/            # 工具函数
    ├── api.ts
    └── ...
```

### Q: 如何在两个前端间导航？

A: 在后台管理中添加查看按钮链接到门户网站：
```typescript
// Frontend
<a href="https://example.com" target="_blank">
  预览博客
</a>

// Portal
<a href="https://example.com/admin" target="_blank">
  管理后台
</a>
```

### Q: 两个前端如何同时开发？

A: 在项目根目录创建脚本 `start-all.sh`：

```bash
#!/bin/bash
echo "启动后端..."
cd backend && python main.py &
BACKEND_PID=$!

echo "启动后台管理..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo "启动博客门户..."
cd ../portal && npm run dev &
PORTAL_PID=$!

echo "所有服务已启动"
echo "后端: http://localhost:8102"
echo "后台管理: http://localhost:3000"
echo "博客门户: http://localhost:5173"
```

给执行权限：
```bash
chmod +x start-all.sh
./start-all.sh
```

### Q: 如何选择使用哪个前端？

A: 根据用途选择：
- **创建/编辑文章** → Frontend（后台管理）
- **浏览文章** → Portal（博客展示）
- **统计数据** → Frontend（后台管理）
- **阅读体验** → Portal（博客展示）

---

## 技术对比

| 特性 | Frontend（后台） | Portal（门户） |
|------|-----------------|----------------|
| UI 库 | Ant Design Pro | TailwindCSS |
| 框架 | Umi 4 | Vite |
| 复杂性 | 高（功能完整） | 低（内容展示） |
| 性能 | 中等 | 最优 |
| 包体积 | 较大 | 较小 |
| 学习曲线 | 平缓（框架完整） | 陡峭（自由度高） |
| 场景 | 后台管理系统 | 内容展示网站 |

---

## 下一步

### 后台管理 (Frontend)
- [ ] 实现文章 CRUD
- [ ] 用户权限管理
- [ ] 数据统计分析
- [ ] 系统设置

### 博客门户 (Portal)
- [ ] 连接后端 API
- [ ] 实现文章搜索
- [ ] 添加评论功能
- [ ] 性能优化

### 共同任务
- [ ] 完整的后端 API
- [ ] 数据库设计
- [ ] 用户认证系统
- [ ] 部署到生产环境

---

## 项目地址

```
后端：/backend/
后台管理：/frontend/
博客门户：/portal/
```

---

## 总结

通过这个双前端项目结构，你可以：

✅ **学习不同的 UI 框架** - Ant Design Pro vs TailwindCSS
✅ **理解前后端分离** - 两个前端共享一个后端
✅ **实践全栈开发** - 从设计到部署的完整流程
✅ **积累企业级经验** - 实际项目中的架构设计

祝你开发愉快！🚀

