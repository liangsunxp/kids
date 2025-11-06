import { useParams, Link } from 'react-router-dom'

export default function BlogDetail() {
  const { id } = useParams()

  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Link */}
        <Link to="/blog" className="text-primary-500 hover:text-primary-600 mb-8 inline-flex items-center gap-2">
          ← 返回文章列表
        </Link>

        {/* Article Header */}
        <article className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            FastAPI 从零开始
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b">
            <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
              Backend
            </span>
            <time className="text-gray-500">2024-01-15</time>
            <span className="text-gray-500">阅读 8 分钟</span>
            <span className="text-gray-500">作者: Leon</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FastAPI 是一个现代的、快速的（高性能的）web 框架，用于基于标准 Python 类型提示构建 API。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              什么是 FastAPI？
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FastAPI 是建立在 Starlette 和 Pydantic 之上的现代化 Python Web 框架。
              它提供了快速的性能、易于编写的代码和自动的 API 文档。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              主要特性
            </h2>
            <ul className="list-disc list-inside space-y-3 mb-6">
              <li className="text-lg text-gray-700">
                <strong>快速：</strong> 非常高的性能，可与 NodeJS 和 Go 相媲美
              </li>
              <li className="text-lg text-gray-700">
                <strong>快速编码：</strong> 提高开发功能的速度约 200% 至 300%
              </li>
              <li className="text-lg text-gray-700">
                <strong>更少错误：</strong> 减少约 40% 由开发者引发的人为错误
              </li>
              <li className="text-lg text-gray-700">
                <strong>自动文档：</strong> 自动生成交互式 API 文档
              </li>
              <li className="text-lg text-gray-700">
                <strong>基于标准：</strong> 基于 OpenAPI 和 JSON Schema 的行业标准
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              开始使用
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              安装 FastAPI 非常简单：
            </p>

            <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
              <code className="text-sm">
{`pip install fastapi uvicorn`}
              </code>
            </pre>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              然后创建一个简单的应用：
            </p>

            <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
              <code className="text-sm">
{`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              总结
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              FastAPI 是现代 Python 开发的一个强大工具，特别适合构建高性能的 RESTful API。
              如果你正在考虑使用 Python 来构建 Web 应用，FastAPI 绝对值得一试。
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">相关文章</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Link key={i} to={`/blog/${i + 1}`}>
                <article className="card p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">
                    相关文章 {i}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    这是一篇相关的文章摘要...
                  </p>
                  <span className="text-primary-500 text-sm font-medium hover:gap-1 inline-flex items-center gap-0 transition-all">
                    继续阅读 →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

