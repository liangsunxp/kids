# FastAPI 后端

这是项目的后端部分，基于 FastAPI 框架。

## 快速开始

### 1. 创建虚拟环境

```bash
python -m venv venv
source venv/bin/activate  # macOS/Linux
# 或
venv\Scripts\activate  # Windows
```

### 2. 安装依赖

```bash
pip install -r requirements.txt
```

### 3. 运行应用

```bash
python main.py
```

应用将在 `http://localhost:8102` 启动

### 4. 查看 API 文档

- Swagger UI: `http://localhost:8102/docs`
- ReDoc: `http://localhost:8102/redoc`

## 项目结构

```
backend/
├── main.py              # 主应用入口
├── requirements.txt     # 依赖列表
├── .env.example        # 环境变量示例
├── .gitignore          # Git 忽略文件
└── app/                # 应用模块（可选）
    ├── __init__.py
    ├── models/         # 数据模型
    ├── routes/         # API 路由
    ├── services/       # 业务逻辑
    └── utils/          # 工具函数
```

## 配置

复制 `.env.example` 为 `.env` 并根据需要修改配置。

## API 端口

后端运行在 `http://localhost:8102`

前端开发时需要配置代理或使用完整 URL 访问 API。

