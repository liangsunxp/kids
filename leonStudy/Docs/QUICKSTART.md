# 快速开始指南

> ⏱️ 预计时间：5-10 分钟

## 5 分钟快速启动

### 步骤 1：准备环境（1 分钟）

```bash
# 进入项目目录
cd /Users/leonsun/Documents/GitHub/kids/leonStudy

# 确保已安装 Python 3.8+ 和 Node.js 16+
python --version
node --version
npm --version
```

### 步骤 2：启动后端（2 分钟）

**打开终端 1：**

```bash
# 进入后端目录
cd backend

# 创建虚拟环境（首次需要）
python -m venv venv

# 激活虚拟环境
source venv/bin/activate  # macOS/Linux
# 或
venv\Scripts\activate     # Windows

# 安装依赖（首次需要）
pip install -r requirements.txt

# 启动应用
python main.py
```

✅ 你应该看到输出类似：
```
INFO:     Started server process [12345]
INFO:     Uvicorn running on http://0.0.0.0:8102
```

### 步骤 3：启动前端（2 分钟）

**打开终端 2：**

```bash
# 进入前端目录（从项目根目录）
cd frontend

# 安装依赖（首次需要）
npm install

# 或使用 cnpm（国内用户，速度更快）
# cnpm install

# 启动开发服务器
npm run dev
```

✅ 你应该看到输出类似：
```
  VITE v... ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### 步骤 4：打开浏览器（1 分钟）

在浏览器中打开以下地址：

| 地址 | 说明 |
|------|------|
| http://localhost:3000 | 前端应用 |
| http://localhost:8102/docs | 后端 API 文档 |

---

## 验证一切正常

### 检查后端

访问 `http://localhost:8102/docs` 应该看到 Swagger UI 界面

点击 `Try it out` 测试 API 端点

### 检查前端

访问 `http://localhost:3000` 应该看到仪表盘页面

页面下方应该显示后端响应的数据

### 检查通信

在浏览器开发者工具（F12）中：
1. 打开 Network 标签
2. 点击页面的某个按钮
3. 应该看到 API 请求被发送到 http://localhost:8102

---

## 常见命令速查表

### 后端常用命令

```bash
# 进入后端目录
cd backend

# 创建虚拟环境
python -m venv venv

# 激活虚拟环境
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# 检查激活状态（显示 (venv) 前缀）
which python  # macOS/Linux
where python  # Windows

# 退出虚拟环境
deactivate

# 安装依赖
pip install -r requirements.txt

# 运行应用
python main.py

# 查看 API 文档
# 在浏览器打开 http://localhost:8102/docs
```

### 前端常用命令

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 清除缓存
rm -rf node_modules dist  # macOS/Linux
rmdir /s node_modules dist # Windows

# 重新安装
npm install
```

---

## 遇到问题？

### 问题 1：后端启动失败

**错误信息：** `ModuleNotFoundError: No module named 'fastapi'`

**解决方案：**
1. 确认虚拟环境已激活（提示符应该显示 `(venv)`)
2. 运行 `pip install -r requirements.txt`
3. 再次运行 `python main.py`

### 问题 2：前端启动失败

**错误信息：** `command not found: npm`

**解决方案：**
1. 安装 Node.js：https://nodejs.org/
2. 验证安装：`npm --version`
3. 再次运行 `npm install`

### 问题 3：端口被占用

**错误信息：** `Address already in use`

**解决方案：**

macOS/Linux：
```bash
# 查找占用的进程
lsof -i :8102
lsof -i :3000

# 杀死进程（替换 PID 为实际 ID）
kill -9 <PID>
```

Windows：
```bash
# 查找占用的进程
netstat -ano | findstr :8102
netstat -ano | findstr :3000

# 杀死进程（替换 PID 为实际 ID）
taskkill /PID <PID> /F
```

### 问题 4：CORS 错误

**浏览器错误：** `Access to XMLHttpRequest blocked by CORS policy`

**解决方案：**
1. 确保后端已启动
2. 检查前端的代理配置（`.umirc.ts` 中的 proxy 设置）
3. 检查后端的 CORS 配置（`backend/main.py`）

### 问题 5：前端无法连接到后端

**症状：** API 调用失败或超时

**解决方案：**
1. 打开浏览器 DevTools (F12)
2. 查看 Network 标签中的请求
3. 检查请求是否发送到正确的地址
4. 确认后端是否正在运行

---

## 下一步？

### 🎯 学习路径

1. **了解项目结构**
   - 阅读 `PROJECT_STRUCTURE.md`

2. **学习开发流程**
   - 阅读 `DEVELOPMENT.md`

3. **添加你的第一个 API**
   - 在 `backend/main.py` 添加新的路由
   - 在前端调用这个 API

4. **探索 Ant Design Pro**
   - 官方文档：https://pro.ant.design/
   - 学习如何使用更多组件

5. **深入 FastAPI**
   - 官方文档：https://fastapi.tiangolo.com/
   - 学习数据验证、异步等

### 📚 推荐资源

**FastAPI：**
- https://fastapi.tiangolo.com/
- https://github.com/tiangolo/fastapi

**React：**
- https://react.dev/
- https://github.com/facebook/react

**Ant Design Pro：**
- https://pro.ant.design/
- https://github.com/ant-design/ant-design-pro

**TypeScript：**
- https://www.typescriptlang.org/
- https://github.com/microsoft/TypeScript

---

## 有用的快捷方式

### macOS/Linux

```bash
# 一键启动所有服务
chmod +x start.sh
./start.sh

# 在新标签页中打开项目
open .
code .  # 用 VS Code 打开
```

### Windows

```bash
# 在文件浏览器中打开项目
start .

# 用 VS Code 打开
code .
```

---

## 什么是下一步？

完成快速开始后，你可以：

- [ ] 添加新的页面
- [ ] 添加新的 API 端点
- [ ] 连接真实数据库
- [ ] 实现用户认证
- [ ] 部署到生产环境

---

## 需要帮助？

1. 查看 `DEVELOPMENT.md` 的完整开发指南
2. 查看 `PROJECT_STRUCTURE.md` 的项目结构说明
3. 查看各项目的 README.md：
   - `backend/README.md`
   - `frontend/README.md`

---

**祝你开发愉快！** 🚀

