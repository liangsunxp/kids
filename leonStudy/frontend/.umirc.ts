import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  layout: {
    locale: true,
    siderWidth: 208,
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: '仪表盘',
      path: '/dashboard',
      component: './Dashboard',
    },
    {
      name: '用户管理',
      path: '/users',
      component: './Users',
    },
    {
      name: '关于',
      path: '/about',
      component: './About',
    },
  ],
  npmClient: 'npm',
  proxy: {
    '/api': {
      target: 'http://localhost:8102',
      changeOrigin: true,
    },
  },
});

