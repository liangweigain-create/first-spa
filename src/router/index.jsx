// src/router/index.js
import { createBrowserRouter } from 'react-router-dom';

// 先导入“占位组件”（后续替换为真实页面）
import Layout from '../components/Layout'; // 布局组件（固定导航/Outlet）
import Home from '../pages/Home'; // 首页
import About from '../pages/About'; // 关于页
import NotFound from '../pages/NotFound'; // 404页

// 定义路由规则（先写结构，组件内容后续补）
const router = createBrowserRouter([
  {
    path: '/', // 根路径
    element: <Layout />, // 布局组件（包含 Outlet）
    children: [
      { index: true, element: <Home /> }, // 默认首页
      { path: 'about', element: <About /> } // 关于页（子路由）
    ]
  },
  { path: '*', element: <NotFound /> } // 404兜底
]);

export default router;