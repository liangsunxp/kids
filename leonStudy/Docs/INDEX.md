# 📚 文档索引

欢迎来到 Leon Study 项目的文档中心！

本文件夹包含了项目的所有重要文档，帮助你快速了解和开发这个双前端分离项目。

---

## 🌟 快速导航

### 新手入门
- 👉 **[QUICKSTART.md](./QUICKSTART.md)** - 5分钟快速开始指南
  - 适合：第一次使用项目的开发者
  - 内容：环境准备、启动步骤、常见问题
  - 时间：5-10 分钟

### 深入学习
- 📖 **[DEVELOPMENT.md](./DEVELOPMENT.md)** - 完整开发指南
  - 适合：想要深入了解项目开发流程的开发者
  - 内容：开发环境设置、前后端通信、常见任务、调试技巧
  - 时间：30 分钟

### 架构理解
- 🏗️ **[ARCHITECTURE.md](./ARCHITECTURE.md)** - 系统架构设计
  - 适合：想要理解项目整体架构的开发者
  - 内容：架构图、数据流、分层设计、部署策略
  - 时间：15 分钟

### 项目结构
- 📂 **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - 项目结构详解
  - 适合：想要了解代码组织方式的开发者
  - 内容：目录说明、配置文件、扩展指南
  - 时间：20 分钟

### 双前端指南
- 🎯 **[FRONTEND_GUIDE.md](./FRONTEND_GUIDE.md)** - 双前端项目指南
  - 适合：需要使用两个不同前端的开发者
  - 内容：两个前端的对比、功能说明、部署策略
  - 时间：15 分钟

### 项目总结
- ✨ **[COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md)** - 项目完成总结
  - 适合：想要快速了解项目状态的开发者
  - 内容：已完成工作、下一步建议、学习路径
  - 时间：10 分钟

### 项目总览
- 📄 **[README.md](./README.md)** - 项目总体说明
  - 适合：新人了解项目整体情况
  - 内容：项目介绍、技术栈、快速开始
  - 时间：10 分钟

---

## 🎯 按用途查找

### "我想快速启动应用"
```
1. 打开 QUICKSTART.md
2. 按照步骤 1-4 启动应用
3. 在浏览器中打开 http://localhost:3000
```

### "我想理解项目架构"
```
1. 阅读 ARCHITECTURE.md 了解整体架构
2. 查看 PROJECT_STRUCTURE.md 理解代码组织
3. 阅读 DEVELOPMENT.md 学习开发流程
```

### "我想添加新功能"
```
1. 查看 PROJECT_STRUCTURE.md 理解现有结构
2. 阅读 DEVELOPMENT.md 中的"常见开发任务"
3. 参考后端 API 文档：http://localhost:8102/docs
4. 在后端添加新的 API 端点
5. 在前端调用新的 API
```

### "我想开发后台管理系统"
```
1. 查看 FRONTEND_GUIDE.md 了解 Frontend 应用
2. 进入 frontend/ 目录
3. 参考 frontend/README.md
4. 在 frontend/src/pages 添加新页面
```

### "我想开发博客展示网站"
```
1. 查看 FRONTEND_GUIDE.md 了解 Portal 应用
2. 进入 portal/ 目录
3. 参考 portal/README.md
4. 在 portal/src/pages 添加新页面
```

### "我想部署到生产环境"
```
1. 阅读 ARCHITECTURE.md 中的"部署架构"
2. 查看 DEVELOPMENT.md 中的"部署清单"
3. 参考各项目的 README.md
```

### "我遇到了问题"
```
1. 查看 QUICKSTART.md 中的"遇到问题？"
2. 查看 DEVELOPMENT.md 中的"常见问题"
3. 检查浏览器开发者工具 (F12)
4. 访问 http://localhost:8102/docs 检查 API 状态
```

---

## 📋 文档列表

| 文件 | 说明 | 阅读时间 | 适合人群 |
|------|------|---------|--------|
| QUICKSTART.md | 5分钟快速开始 | 5 分钟 | 所有人 |
| README.md | 项目总体说明 | 10 分钟 | 新手 |
| DEVELOPMENT.md | 完整开发指南 | 30 分钟 | 开发者 |
| ARCHITECTURE.md | 系统架构设计 | 15 分钟 | 架构师 |
| PROJECT_STRUCTURE.md | 项目结构详解 | 20 分钟 | 开发者 |
| FRONTEND_GUIDE.md | 双前端项目指南 | 15 分钟 | 前端开发者 |
| COMPLETION_SUMMARY.md | 项目完成总结 | 10 分钟 | 所有人 |
| INDEX.md | 文档索引（本文件） | 5 分钟 | 所有人 |

---

## 🎓 推荐学习路径

### 初学者（第一次使用）
```
Day 1:
1. 阅读 README.md (10 min)
2. 按照 QUICKSTART.md 启动应用 (10 min)
3. 浏览 PROJECT_STRUCTURE.md (20 min)
4. 探索代码和功能 (30 min)

Day 2:
1. 阅读 ARCHITECTURE.md (15 min)
2. 阅读 DEVELOPMENT.md (30 min)
3. 尝试添加新的 API 端点 (60 min)
4. 在前端调用新 API (60 min)
```

### 前端开发者
```
1. 阅读 QUICKSTART.md (5 min)
2. 启动应用 (5 min)
3. 查看 FRONTEND_GUIDE.md (15 min)
4. 选择一个前端项目深入 (frontend/ 或 portal/)
5. 参考项目的 README.md 开发 (持续)
```

### 后端开发者
```
1. 阅读 QUICKSTART.md (5 min)
2. 启动后端应用 (5 min)
3. 访问 API 文档 http://localhost:8102/docs (5 min)
4. 在 backend/main.py 中添加新的 API (30 min)
5. 参考 DEVELOPMENT.md 的最佳实践 (持续)
```

### 全栈开发者
```
1. 阅读 ARCHITECTURE.md (15 min)
2. 按照 QUICKSTART.md 启动所有应用 (10 min)
3. 学习 PROJECT_STRUCTURE.md (20 min)
4. 阅读 DEVELOPMENT.md 的完整内容 (30 min)
5. 查看 FRONTEND_GUIDE.md 理解两个前端 (15 min)
6. 开始开发完整功能 (持续)
```

---

## 💡 快速参考

### 常用命令

**启动后端**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python main.py
# 访问 http://localhost:8102
```

**启动前端**
```bash
cd frontend
npm install
npm run dev
# 访问 http://localhost:3000
```

**启动门户**
```bash
cd portal
npm install
npm run dev
# 访问 http://localhost:5173
```

### 常用 URL

| URL | 说明 |
|-----|------|
| http://localhost:3000 | 后台管理系统 |
| http://localhost:5173 | 博客展示门户 |
| http://localhost:8102 | 后端 API |
| http://localhost:8102/docs | Swagger API 文档 |
| http://localhost:8102/redoc | ReDoc API 文档 |

### 常见问题快速解答

**Q: 如何快速启动？**
A: 看 QUICKSTART.md

**Q: 项目怎么组织的？**
A: 看 PROJECT_STRUCTURE.md

**Q: 前后端如何通信？**
A: 看 ARCHITECTURE.md 和 DEVELOPMENT.md

**Q: 两个前端有什么区别？**
A: 看 FRONTEND_GUIDE.md

**Q: 如何开发新功能？**
A: 看 DEVELOPMENT.md 的"常见开发任务"

**Q: 遇到错误怎么办？**
A: 看 QUICKSTART.md 的"遇到问题"或 DEVELOPMENT.md 的"常见问题"

---

## 🔗 相关资源

### 项目代码
- **后端**: `../backend/` - FastAPI 应用
- **前端**: `../frontend/` - Ant Design Pro 应用
- **门户**: `../portal/` - TailwindCSS 应用

### 官方文档
- [FastAPI 官方文档](https://fastapi.tiangolo.com/)
- [React 官方文档](https://react.dev/)
- [Ant Design Pro](https://pro.ant.design/)
- [TailwindCSS](https://tailwindcss.com/)
- [Umi](https://umijs.org/)
- [Vite](https://vitejs.dev/)

### 技术栈版本
- Python 3.8+
- Node.js 16+
- React 18
- FastAPI 0.104+
- Ant Design Pro 5.x
- TailwindCSS 3.x

---

## 📞 需要帮助？

1. **查看相关文档** - 大部分问题都能在文档中找到答案
2. **检查浏览器控制台** - F12 打开开发者工具查看错误
3. **查看服务器日志** - 查看终端输出信息
4. **测试 API** - 访问 http://localhost:8102/docs 测试后端

---

## ✨ 项目特色

✅ **完全前后端分离** - 独立开发、部署
✅ **双前端架构** - 后台管理 + 博客展示
✅ **企业级设计** - Ant Design Pro UI
✅ **详细文档** - 从入门到精通
✅ **开箱即用** - 所有配置已完成
✅ **最佳实践** - 遵循行业标准

---

## 🚀 开始使用

**第一步：** 选择你感兴趣的文档开始阅读
- 新手？→ 看 QUICKSTART.md
- 想了解架构？→ 看 ARCHITECTURE.md
- 想开发代码？→ 看 DEVELOPMENT.md

**第二步：** 按照文档的指导启动应用

**第三步：** 开始探索和开发！

---

## 📝 文档更新记录

- 2024-01-01: 创建初始文档
- 所有文档都在 `Docs/` 文件夹中统一管理

---

**祝你开发愉快！** 🎉

有任何问题或建议，欢迎反馈。

