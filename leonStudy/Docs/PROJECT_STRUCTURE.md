# 项目结构说明

## 完整项目树

```
leonStudy/
│
├── 📁 backend/                 # FastAPI 后端应用
│   ├── main.py                 # 应用入口，包含路由定义
│   ├── requirements.txt         # Python 依赖列表
│   ├── .gitignore             # Git 忽略配置
│   ├── .env.example           # 环境变量示例
│   ├── README.md              # 后端说明文档
│   └── app/                   # 应用模块（可选扩展）
│       ├── __init__.py
│       ├── models/            # 数据模型（Pydantic）
│       ├── routes/            # API 路由
│       ├── services/          # 业务逻辑
│       └── utils/             # 工具函数
│
├── 📁 frontend/                # React + Ant Design Pro 前端
│   ├── 📁 src/
│   │   ├── 📁 pages/          # 页面组件
│   │   │   ├── Dashboard.tsx  # 仪表盘页面
│   │   │   ├── Users.tsx      # 用户管理页面
│   │   │   └── About.tsx      # 关于页面
│   │   ├── 📁 components/     # 共享组件（待创建）
│   │   ├── 📁 services/       # API 服务层（待创建）
│   │   ├── 📁 hooks/          # 自定义 Hooks（待创建）
│   │   ├── 📁 stores/         # 状态管理（待创建）
│   │   ├── app.tsx            # Umi 配置
│   │   ├── index.tsx          # 入口文件
│   │   ├── index.css          # 全局样式
│   │   └── App.tsx            # 应用根组件
│   ├── index.html             # HTML 入口文件
│   ├── package.json           # 项目依赖和脚本
│   ├── vite.config.ts         # Vite 构建配置
│   ├── .umirc.ts              # Umi 路由和配置
│   ├── tsconfig.json          # TypeScript 配置
│   ├── .gitignore             # Git 忽略配置
│   ├── README.md              # 前端说明文档
│   └── .env.development       # 开发环境变量（示例）
│
├── 📁 .git/                   # Git 版本控制
│
├── .gitignore                  # 项目级 Git 忽略
├── .env.example               # 项目级环境变量示例
├── README.md                  # 项目总体说明
├── DEVELOPMENT.md             # 开发指南（详细）
├── PROJECT_STRUCTURE.md       # 本文件 - 项目结构说明
├── start.sh                   # 启动脚本（macOS/Linux）
└── package.json               # 项目根目录配置（可选）
```

---

## 目录说明

### 后端 (`backend/`)

#### `main.py`
FastAPI 应用的主入口文件

**包含内容：**
- FastAPI 应用实例创建
- CORS 中间件配置
- API 路由定义
- 启动脚本

#### `requirements.txt`
Python 依赖列表

**当前依赖：**
```
fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
python-dotenv==1.0.0
```

#### `app/` 目录（可选扩展）
当项目增长时的模块化结构

**子目录：**
- `models/` - Pydantic 数据模型定义
- `routes/` - 按功能分离的路由
- `services/` - 业务逻辑层
- `utils/` - 工具函数

**示例结构：**
```
app/
├── __init__.py
├── models/
│   ├── __init__.py
│   ├── user.py
│   └── item.py
├── routes/
│   ├── __init__.py
│   ├── users.py
│   └── items.py
├── services/
│   ├── __init__.py
│   └── user_service.py
└── utils/
    ├── __init__.py
    └── helpers.py
```

---

### 前端 (`frontend/`)

#### `src/` 目录

##### `pages/`
路由对应的页面组件

**当前文件：**
- `Dashboard.tsx` - 仪表盘（首页）
- `Users.tsx` - 用户管理列表
- `About.tsx` - 关于页面

**将来结构：**
```
pages/
├── dashboard/
│   ├── index.tsx
│   ├── components/
│   └── services/
├── users/
│   ├── index.tsx
│   ├── list.tsx
│   ├── detail.tsx
│   ├── edit.tsx
│   └── create.tsx
├── settings/
│   ├── profile.tsx
│   └── security.tsx
└── auth/
    ├── login.tsx
    └── register.tsx
```

##### `components/`（待创建）
可复用的组件库

**建议结构：**
```
components/
├── Layout/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── Common/
│   ├── Loading.tsx
│   ├── Error.tsx
│   ├── Empty.tsx
│   └── Pagination.tsx
├── Form/
│   ├── SearchForm.tsx
│   ├── FilterForm.tsx
│   └── EditForm.tsx
└── Table/
    ├── UserTable.tsx
    ├── ItemTable.tsx
    └── DataTable.tsx
```

##### `services/`（待创建）
API 调用层

**示例文件：**
```
services/
├── api.ts          # API 配置和拦截器
├── user.ts         # 用户 API
├── item.ts         # 项目 API
└── common.ts       # 通用 API
```

##### `hooks/`（待创建）
自定义 React Hooks

**示例：**
```
hooks/
├── useAuth.ts      # 认证 Hook
├── useAsync.ts     # 异步操作 Hook
└── usePagination.ts # 分页 Hook
```

##### `stores/`（待创建）
状态管理（如使用 Zustand）

**示例：**
```
stores/
├── authStore.ts    # 认证状态
├── userStore.ts    # 用户状态
└── commonStore.ts  # 通用状态
```

#### `index.html`
HTML 入口文件

#### `package.json`
项目依赖和脚本配置

#### `.umirc.ts`
Umi 框架配置

**配置内容：**
- 路由配置
- 布局配置
- 代理配置
- 国际化配置

#### `vite.config.ts`
Vite 构建工具配置

**配置内容：**
- 路径别名（@ 指向 src）
- 开发服务器配置
- 代理配置

#### `tsconfig.json`
TypeScript 编译配置

---

## 数据流

### 用户请求流程

```
浏览器
  ↓
前端应用 (React Component)
  ↓
API 服务层 (services/api.ts)
  ↓
HTTP 请求 (Axios)
  ↓
Vite 代理 /api → http://localhost:8102
  ↓
后端 FastAPI
  ↓
路由处理 (main.py)
  ↓
业务逻辑 (app/services/)
  ↓
数据模型验证 (Pydantic)
  ↓
JSON 响应
  ↓
HTTP 传输
  ↓
前端接收
  ↓
状态管理 (Store/State)
  ↓
重新渲染组件
  ↓
浏览器显示
```

---

## 配置文件说明

### 后端配置

#### `main.py` 重要部分

```python
# CORS 配置（允许前端访问）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API 路由
@app.get("/api/users")
def get_users():
    return users

# 启动脚本
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8102, reload=True)
```

### 前端配置

#### `.umirc.ts` 重要部分

```typescript
// 路由配置
routes: [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: './Dashboard' },
  { path: '/users', component: './Users' },
]

// API 代理配置
proxy: {
  '/api': {
    target: 'http://localhost:8102',
    changeOrigin: true,
  },
}
```

#### `vite.config.ts` 重要部分

```typescript
// 路径别名
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}

// 代理配置
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

## 扩展指南

### 添加新的 API 端点

1. **在后端添加路由**
   ```python
   # backend/app/routes/items.py
   @app.get("/api/items")
   def get_items():
       return items
   ```

2. **在前端创建 API 服务**
   ```typescript
   // frontend/src/services/item.ts
   export const getItems = () => {
     return apiClient.get('/items')
   }
   ```

3. **在组件中使用**
   ```typescript
   // frontend/src/pages/Items.tsx
   useEffect(() => {
     getItems().then(res => setItems(res.data))
   }, [])
   ```

### 添加新的页面

1. **创建页面组件**
   ```typescript
   // frontend/src/pages/NewPage.tsx
   export default function NewPage() {
     return <div>New Page</div>
   }
   ```

2. **在路由中注册**
   ```typescript
   // frontend/.umirc.ts
   routes: [
     { path: '/new-page', component: './NewPage' },
   ]
   ```

3. **添加导航菜单**
   在布局或菜单组件中添加链接

---

## 文件编码和格式

### 代码风格

**后端：**
- 使用 PEP 8 风格
- 类型注解
- Docstring 文档

**前端：**
- 使用 ESLint 和 Prettier
- TypeScript 类型注解
- JSDoc 注释

### 文件命名规范

**后端：**
- 模块：`snake_case` (e.g., `user_model.py`)
- 类：`PascalCase` (e.g., `class UserModel`)
- 函数：`snake_case` (e.g., `def get_user()`)

**前端：**
- 文件：`PascalCase` (e.g., `UserList.tsx`)
- 组件：`PascalCase` (e.g., `export default function UserList()`)
- 变量/函数：`camelCase` (e.g., `const userData = {}`)

---

## 环境隔离

### 后端虚拟环境

```bash
# 创建
python -m venv venv

# 激活
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# 确认已激活（提示符会显示 (venv)）
```

### 前端 node_modules

```bash
# node_modules 是独立的依赖环境
# npm install 会自动创建和管理
```

---

## 总结

这个项目结构遵循以下原则：

✅ **清晰分离** - 前后端完全独立
✅ **易于扩展** - 模块化设计便于添加功能
✅ **易于维护** - 职责清晰，易于理解
✅ **易于测试** - 各层独立可测试
✅ **生产就绪** - 遵循企业级最佳实践

### 下一步

- [ ] 学习如何添加数据库支持
- [ ] 了解如何实现用户认证
- [ ] 学习项目部署流程
- [ ] 添加单元测试
- [ ] 添加 API 文档

