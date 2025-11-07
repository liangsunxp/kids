# 开发指南

## 项目概览

这是一个完全前后端分离的项目，包含两个独立的应用：

### 后端 (Backend)
- **框架**: FastAPI
- **语言**: Python 3.8+
- **端口**: 8102
- **API 文档**: http://localhost:8102/docs

### 前端 (Frontend)
- **框架**: React 18 + TypeScript
- **UI 库**: Ant Design Pro
- **构建工具**: Umi 4
- **端口**: 3000
- **应用地址**: http://localhost:3000

---

## 开发环境设置

### 前置要求

- Python 3.8+ 
- Node.js 16+
- npm 或 yarn

### 后端设置

#### 1. 进入后端目录

```bash
cd backend
```

#### 2. 创建虚拟环境

```bash
python -m venv venv

# macOS/Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

#### 3. 安装依赖

```bash
pip install -r requirements.txt
```

#### 4. 配置环境变量

```bash
# 复制环境变量示例文件
cp .env.example .env

# 编辑 .env 文件（可选，使用默认值即可）
```

#### 5. 启动应用

```bash
python main.py
```

应用将在 `http://localhost:8102` 启动

#### 6. 查看 API 文档

访问 `http://localhost:8102/docs` 查看 Swagger 交互式文档

---

### 前端设置

#### 1. 进入前端目录

```bash
cd frontend
```

#### 2. 安装依赖

```bash
npm install
```

如果网络较慢，可以使用淘宝镜像：

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

#### 3. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动

#### 4. 构建生产版本

```bash
npm run build
```

生成的文件在 `dist/` 目录

---

## 开发流程

### 场景 1：同时开发前后端

#### 终端 1 - 启动后端

```bash
cd backend
source venv/bin/activate  # 或 venv\Scripts\activate
python main.py
```

#### 终端 2 - 启动前端

```bash
cd frontend
npm run dev
```

#### 终端 3 - 编辑代码

使用 VS Code 或你喜欢的编辑器编写代码

### 场景 2：只开发前端

如果只需要开发前端，可以：

1. 确保后端正在运行或使用 Mock 数据
2. 前端配置代理会自动转发 `/api` 请求到后端

### 场景 3：只开发后端

只运行后端，使用 Swagger UI (`http://localhost:8102/docs`) 测试 API

---

## 前后端通信

### API 基础 URL

| 环境 | 前端地址 | 后端地址 | API 基础 URL |
|------|--------|--------|-------------|
| 开发 | localhost:3000 | localhost:8102 | /api |
| 生产 | example.com | api.example.com | https://api.example.com |

### API 调用示例

#### 前端代码

```typescript
// src/services/api.ts
import axios from 'axios'

const API_BASE = process.env.REACT_APP_API_URL || '/api'

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
})

// 获取用户列表
export const getUsers = () => {
  return apiClient.get('/users')
}

// 创建用户
export const createUser = (data: any) => {
  return apiClient.post('/users', data)
}

// 更新用户
export const updateUser = (id: number, data: any) => {
  return apiClient.put(`/users/${id}`, data)
}

// 删除用户
export const deleteUser = (id: number) => {
  return apiClient.delete(`/users/${id}`)
}
```

#### 后端代码

```python
# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str

users_db = []

@app.get("/api/users")
def get_users():
    return users_db

@app.post("/api/users")
def create_user(user: User):
    new_user = {
        "id": len(users_db) + 1,
        **user.dict()
    }
    users_db.append(new_user)
    return new_user

@app.put("/api/users/{user_id}")
def update_user(user_id: int, user: User):
    for u in users_db:
        if u["id"] == user_id:
            u.update(user.dict())
            return u
    raise HTTPException(status_code=404, detail="User not found")

@app.delete("/api/users/{user_id}")
def delete_user(user_id: int):
    global users_db
    users_db = [u for u in users_db if u["id"] != user_id]
    return {"message": "User deleted"}
```

#### 前端组件中使用

```typescript
// src/pages/Users.tsx
import { useEffect, useState } from 'react'
import { Table, Button, message } from 'antd'
import { getUsers, deleteUser } from '@/services/api'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await getUsers()
      setUsers(response.data)
    } catch (error) {
      message.error('获取用户列表失败')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id)
      message.success('删除成功')
      fetchUsers()
    } catch (error) {
      message.error('删除失败')
    }
  }

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: '用户名', dataIndex: 'name' },
    { title: '邮箱', dataIndex: 'email' },
    {
      title: '操作',
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          删除
        </Button>
      ),
    },
  ]

  return <Table columns={columns} dataSource={users} loading={loading} />
}
```

---

## 常见开发任务

### 添加新的 API 端点

#### 1. 在后端添加路由

```python
# backend/main.py
from typing import Optional

@app.post("/api/items")
def create_item(name: str, price: float):
    return {
        "id": 1,
        "name": name,
        "price": price
    }

@app.get("/api/items/{item_id}")
def get_item(item_id: int):
    return {
        "id": item_id,
        "name": "Item",
        "price": 10.0
    }
```

#### 2. 在前端调用 API

```typescript
// src/services/api.ts
export const getItem = (id: number) => {
  return apiClient.get(`/items/${id}`)
}

export const createItem = (data: any) => {
  return apiClient.post('/items', data)
}
```

#### 3. 在组件中使用

```typescript
import { getItem } from '@/services/api'

function ItemDetail({ itemId }) {
  const [item, setItem] = useState(null)

  useEffect(() => {
    getItem(itemId).then(res => setItem(res.data))
  }, [itemId])

  return <div>{item?.name}</div>
}
```

### 调试 CORS 问题

如果遇到 CORS 错误：

1. **检查后端 CORS 配置**

```python
# backend/main.py
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 添加前端地址
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

2. **检查前端代理配置**

```typescript
// frontend/vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8102',
      changeOrigin: true,
    },
  },
}
```

### 处理认证

#### 后端 - JWT 认证示例

```python
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthCredentials

security = HTTPBearer()

def verify_token(credentials: HTTPAuthCredentials = Depends(security)):
    token = credentials.credentials
    # 验证 token 的逻辑
    if not token.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid token")
    return token

@app.get("/api/protected")
def protected_route(token: str = Depends(verify_token)):
    return {"message": "This is protected"}
```

#### 前端 - 发送 token

```typescript
const apiClient = axios.create({
  baseURL: '/api',
})

// 请求拦截器
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // 重定向到登录页
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
```

---

## 调试技巧

### 后端调试

#### 1. 使用 FastAPI 自动文档

访问 `http://localhost:8102/docs` 直接测试 API

#### 2. 添加日志

```python
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

@app.get("/api/test")
def test():
    logger.debug("This is a debug message")
    logger.info("This is an info message")
    return {"status": "ok"}
```

#### 3. 使用 Python 调试器

```python
import pdb

@app.get("/api/test")
def test():
    pdb.set_trace()  # 程序将在这里暂停
    return {"status": "ok"}
```

### 前端调试

#### 1. 使用 React DevTools

在浏览器中安装 React DevTools 扩展

#### 2. 使用浏览器 DevTools

- F12 打开开发者工具
- Network 标签查看 API 请求
- Console 标签查看日志
- Application 标签查看存储的数据

#### 3. 添加控制台日志

```typescript
console.log('Debug info:', data)
console.error('Error:', error)
```

---

## 性能优化

### 后端优化

1. 使用异步处理

```python
from fastapi import BackgroundTasks

@app.post("/api/send-email")
async def send_email(background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email_background)
    return {"status": "Email will be sent"}
```

2. 添加缓存

```python
from functools import lru_cache

@lru_cache(maxsize=100)
def expensive_computation(x: int):
    return x ** 2
```

### 前端优化

1. 代码分割

```typescript
import { lazy, Suspense } from 'react'

const Users = lazy(() => import('./pages/Users'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Users />
    </Suspense>
  )
}
```

2. 使用 React.memo 防止不必要的重新渲染

```typescript
import { memo } from 'react'

const UserItem = memo(({ user }) => (
  <div>{user.name}</div>
))
```

---

## 测试

### 后端测试

```bash
# 安装 pytest
pip install pytest

# 运行测试
pytest

# 查看覆盖率
pip install pytest-cov
pytest --cov
```

示例测试文件：

```python
# test_main.py
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"
```

### 前端测试

```bash
# 安装测试库
npm install --save-dev @testing-library/react @testing-library/jest-dom

# 运行测试
npm test
```

---

## 部署清单

### 前端部署

- [ ] 运行 `npm run build` 生成生产版本
- [ ] 配置生产环境 API 地址
- [ ] 部署 `dist/` 目录到服务器或 CDN
- [ ] 配置反向代理指向后端 API
- [ ] 测试所有 API 调用

### 后端部署

- [ ] 更新 `requirements.txt` 依赖
- [ ] 配置生产环境变量
- [ ] 设置数据库连接
- [ ] 配置日志
- [ ] 使用 WSGI 服务器（如 Gunicorn）
- [ ] 配置反向代理（如 Nginx）
- [ ] 启用 HTTPS
- [ ] 设置监控告警

---

## 常见问题

### Q: 前端无法连接后端

**A:** 
1. 确保后端正在运行 (`http://localhost:8102`)
2. 检查前端的 API 地址配置
3. 检查 CORS 配置
4. 打开浏览器 DevTools 查看网络请求

### Q: 修改代码后前端没有热更新

**A:**
1. 确保是否启用了热模块替换 (HMR)
2. 检查 `vite.config.ts` 配置
3. 尝试手动刷新浏览器

### Q: 后端报 "Address already in use" 错误

**A:**
1. 检查端口 8102 是否被占用
2. 更改 `main.py` 中的端口
3. 或者杀死占用该端口的进程

```bash
# macOS/Linux
lsof -i :8102
kill -9 <PID>

# Windows
netstat -ano | findstr :8102
taskkill /PID <PID> /F
```

### Q: 虚拟环境中依赖安装失败

**A:**
1. 确保虚拟环境已激活
2. 更新 pip：`pip install --upgrade pip`
3. 使用国内镜像源：`pip install -i https://pypi.tsinghua.tsinghua.edu.cn/simple -r requirements.txt`

---

## 有用的命令

### 后端

```bash
# 创建虚拟环境
python -m venv venv

# 激活虚拟环境
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate      # Windows

# 检查激活状态（显示 (venv) 前缀）
which python  # macOS/Linux
where python  # Windows

# 退出虚拟环境
deactivate

# 安装依赖
pip install -r requirements.txt

# 运行应用
python main.py

# 查看已安装的包
pip list

# 导出依赖
pip freeze > requirements.txt
```

### 前端

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 清除 node_modules 和 dist
rm -rf node_modules dist
npm install
```

---

## 参考资源

- [FastAPI 官方文档](https://fastapi.tiangolo.com/)
- [React 官方文档](https://react.dev/)
- [Ant Design Pro 文档](https://pro.ant.design/)
- [Axios 文档](https://axios-http.com/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

---

## 支持

如有问题或建议，请提出 issue 或联系项目维护者。

