/**
 * React应用入口文件
 * @author caodw
 * @createDate 2024-05-22
 * 
 * 初始化React应用根组件
 * 配置全局样式引入
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)