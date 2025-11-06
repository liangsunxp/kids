#!/bin/bash

# 启动脚本 - 同时启动前后端

echo "=== Leon Study 应用启动 ==="
echo ""

# 检查是否安装了必要的工具
check_requirements() {
    if ! command -v python3 &> /dev/null; then
        echo "❌ 错误: 需要安装 Python 3"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo "❌ 错误: 需要安装 npm"
        exit 1
    fi
}

# 启动后端
start_backend() {
    echo "启动后端服务..."
    cd backend
    
    # 检查虚拟环境
    if [ ! -d "venv" ]; then
        echo "创建虚拟环境..."
        python3 -m venv venv
    fi
    
    # 激活虚拟环境
    source venv/bin/activate
    
    # 安装依赖
    if [ ! -f "installed" ]; then
        echo "安装依赖..."
        pip install -r requirements.txt
        touch installed
    fi
    
    # 启动应用
    python main.py &
    BACKEND_PID=$!
    echo "✅ 后端已启动 (PID: $BACKEND_PID, 地址: http://localhost:8102)"
    echo ""
    
    cd ..
}

# 启动前端
start_frontend() {
    echo "启动前端应用..."
    cd frontend
    
    # 检查依赖
    if [ ! -d "node_modules" ]; then
        echo "安装依赖..."
        npm install
    fi
    
    # 启动应用
    npm run dev &
    FRONTEND_PID=$!
    echo "✅ 前端已启动 (PID: $FRONTEND_PID, 地址: http://localhost:3000)"
    echo ""
    
    cd ..
}

# 主程序
check_requirements
start_backend
start_frontend

echo "=== 应用已启动 ==="
echo ""
echo "前端地址: http://localhost:3000"
echo "后端地址: http://localhost:8102"
echo "API 文档: http://localhost:8102/docs"
echo ""
echo "按 Ctrl+C 停止应用"
echo ""

# 等待进程
wait

