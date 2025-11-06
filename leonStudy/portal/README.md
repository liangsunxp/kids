# Leon's Blog Portal - 博客展示门户

这是一个使用 React 18、TypeScript 和 TailwindCSS 构建的现代化博客展示门户网站。

## 特性

- ✅ 响应式设计，支持移动端
- ✅ 优雅的 TailwindCSS 样式
- ✅ 快速的 Vite 构建
- ✅ TypeScript 类型安全
- ✅ 博客文章展示
- ✅ 文章分类筛选
- ✅ SEO 友好

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
portal/
├── src/
│   ├── components/       # 公共组件
│   │   └── Layout.tsx
│   ├── pages/           # 页面组件
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogDetail.tsx
│   │   └── About.tsx
│   ├── App.tsx          # 应用根组件
│   ├── main.tsx         # 入口文件
│   └── index.css        # 全局样式（TailwindCSS）
├── tailwind.config.js   # TailwindCSS 配置
├── postcss.config.js    # PostCSS 配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── index.html          # HTML 入口

```

## 与后端通信

前端已配置 API 代理，所有 `/api` 请求会转发到后端。

```typescript
// vite.config.ts 中的代理配置
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8102',
      changeOrigin: true,
    },
  },
}
```

## 页面说明

### 首页 (Home)
- 展示博客简介
- 显示最新文章
- 统计信息
- 订阅区域

### 博客列表 (Blog)
- 显示所有博客文章
- 支持按分类筛选
- 文章预览

### 文章详情 (BlogDetail)
- 显示完整文章内容
- 相关文章推荐

### 关于 (About)
- 个人信息展示
- 技能列表
- 联系方式

## 样式系统

使用 TailwindCSS 提供的样式系统，包括：

- 颜色系统（Primary、Gray 等）
- 响应式设计（sm, md, lg, xl 等）
- 组件类（card, btn-primary, btn-secondary 等）

## 环境配置

复制 `.env.example` 为 `.env`（如需要）：

```
VITE_API_URL=http://localhost:8102
```

## 部署

### 生产环境部署

1. 构建项目
```bash
npm run build
```

2. 上传 `dist` 文件夹到你的服务器

3. 配置 API 指向生产环境后端

## 常见问题

### Q: 如何修改博客数据？

A: 当前是静态数据示例。可以：
1. 连接到后端 API
2. 从 `/api/posts` 获取文章列表
3. 使用 React Query 或 SWR 管理数据

### Q: 如何自定义样式？

A: 修改 `tailwind.config.js` 中的主题配置，或在 `index.css` 中添加自定义 CSS。

### Q: 如何添加新页面？

A: 
1. 在 `src/pages/` 中创建新组件
2. 在 `App.tsx` 中添加路由
3. 在 `Layout.tsx` 中添加导航链接

## 下一步

- [ ] 连接后端 API
- [ ] 添加搜索功能
- [ ] 添加标签功能
- [ ] 实现深色模式
- [ ] 添加评论功能
- [ ] 性能优化

## 技术栈

- React 18
- TypeScript
- React Router
- TailwindCSS
- Vite
- Axios

## 许可证

MIT

