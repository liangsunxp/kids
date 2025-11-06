import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container-max py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-primary-500">
              Leon's Blog
            </Link>
            <div className="hidden md:flex gap-6">
              <Link to="/" className="text-gray-600 hover:text-primary-500 transition-colors">
                首页
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-primary-500 transition-colors">
                博客
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary-500 transition-colors">
                关于
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container-max py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                A blog about learning full-stack development
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">
                Email: contact@example.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Leon's Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

