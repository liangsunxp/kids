export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="section-title">关于我</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🙋 自我介绍
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi，我是 Leon，一个全栈开发工程师。我热爱编程，擅长 Python、JavaScript/TypeScript、React 和 FastAPI。
              在这个博客上，我分享我在全栈开发中的学习经验和最佳实践。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💼 技能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">后端开发</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Python / FastAPI</li>
                  <li>✓ Django / Django REST Framework</li>
                  <li>✓ SQLAlchemy / ORM</li>
                  <li>✓ RESTful API 设计</li>
                  <li>✓ 数据库设计与优化</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">前端开发</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ React / React Hooks</li>
                  <li>✓ TypeScript</li>
                  <li>✓ TailwindCSS / Ant Design</li>
                  <li>✓ Next.js</li>
                  <li>✓ 状态管理 (Zustand, Redux)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 博客专注
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>全栈开发：</strong> 从前端到后端的完整开发流程
              </li>
              <li>
                <strong>最佳实践：</strong> 行业标准和设计模式
              </li>
              <li>
                <strong>学习笔记：</strong> 新技术和新框架的学习记录
              </li>
              <li>
                <strong>项目案例：</strong> 实际项目中的问题解决方案
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📚 博客统计
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">50+</div>
                <p className="text-gray-600">文章</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">10K+</div>
                <p className="text-gray-600">总阅读</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">1K+</div>
                <p className="text-gray-600">粉丝</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">5+</div>
                <p className="text-gray-600">项目</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔗 联系方式
            </h2>
            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                📧 Email: <a href="mailto:leon@example.com" className="text-primary-500 hover:text-primary-600">leon@example.com</a>
              </p>
              <p className="text-lg text-gray-700">
                🐙 GitHub: <a href="https://github.com" className="text-primary-500 hover:text-primary-600">github.com/leon</a>
              </p>
              <p className="text-lg text-gray-700">
                🐦 Twitter: <a href="https://twitter.com" className="text-primary-500 hover:text-primary-600">@leon</a>
              </p>
            </div>
          </section>

          <section className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💡 为什么创建这个博客？
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              在我的学习和工作过程中，我遇到过许多问题和挑战。通过记录和分享这些经验，
              一方面可以帮助我加深理解，另一方面也希望能为其他学习者提供帮助。
              如果我的文章对你有帮助，或者你有任何建议，欢迎联系我！
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

