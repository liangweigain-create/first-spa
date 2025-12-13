// src/components/Layout/index.jsx
import './index.css'
import { Outlet, NavLink } from 'react-router-dom';

// 布局组件：固定导航+Outlet（子路由占位），先写最简结构
export default function Layout() {
  return (
    <>
      {/* 固定导航（声明式路由） */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <NavLink to="/" style={{ marginRight: '10px' }}>首页</NavLink>
        <NavLink to="/about">关于</NavLink>
      </nav>
      {/* 子路由占位符：首页/关于页会渲染在这里 */}
      <main style={{ padding: '10px' }}>
        <Outlet />
      </main>
    </>
  );
}