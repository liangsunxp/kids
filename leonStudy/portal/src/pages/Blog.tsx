import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const posts = [
    {
      id: 1,
      title: 'FastAPI 从零开始',
      excerpt: '学习如何使用 FastAPI 构建现代 Python Web 应用',
      date: '2024-01-15',
      category: 'Backend',
      readTime: 8,
    },
    {
      id: 2,
      title: 'React 18 新特性详解',
      excerpt: '深入了解 React 18 的最新功能和改进',
      date: '2024-01-10',
      category: 'Frontend',
      readTime: 10,
    },
    {
      id: 3,
      title: 'TailwindCSS 实战指南',
      excerpt: '使用 TailwindCSS 快速构建现代化 UI',
      date: '2024-01-05',
      category: 'Frontend',
      readTime: 6,
    },
    {
      id: 4,
      title: '前后端分离架构设计',
      excerpt: '探讨前后端分离的最佳实践',
      date: '2024-01-01',
      category: 'Architecture',
      readTime: 12,
    },
  ]

  const categories = ['Frontend', 'Backend', 'Architecture']
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts

  return (
    <div className="py-20">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="section-title">博客文章</h1>
        </div>

        {/* Filter */}
        <div className="mb-12 flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            全部
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <article className="card p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-sm text-gray-500">{post.date}</time>
                      <span className="text-sm text-gray-500">阅读 {post.readTime} 分钟</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-primary-500 text-2xl">
                    →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无该分类的文章</p>
          </div>
        )}
      </div>
    </div>
  )
}

