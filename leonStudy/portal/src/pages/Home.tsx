import { Link } from 'react-router-dom'

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'FastAPI 从零开始',
      excerpt: '学习如何使用 FastAPI 构建现代 Python Web 应用',
      date: '2024-01-15',
      category: 'Backend',
    },
    {
      id: 2,
      title: 'React 18 新特性详解',
      excerpt: '深入了解 React 18 的最新功能和改进',
      date: '2024-01-10',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'TailwindCSS 实战指南',
      excerpt: '使用 TailwindCSS 快速构建现代化 UI',
      date: '2024-01-05',
      category: 'Frontend',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              欢迎来到 Leon 的博客
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              分享全栈开发经验，从后端 FastAPI 到前端 React，记录学习的每一步
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/blog" className="btn-primary">
                开始阅读
              </Link>
              <Link to="/about" className="btn-secondary">
                了解我
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container-max">
          <h2 className="section-title">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="card p-6 h-full hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-primary-500 font-medium hover:gap-1 inline-flex items-center gap-0 transition-all">
                    阅读更多
                    <span className="ml-2">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-primary-500">50+</div>
              <div className="text-gray-400">文章</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-primary-500">10K+</div>
              <div className="text-gray-400">阅读量</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-primary-500">1K+</div>
              <div className="text-gray-400">粉丝</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">订阅博客</h2>
            <p className="text-lg mb-6 text-primary-100">
              获取最新文章更新和独家内容
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-primary-500 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

