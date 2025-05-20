/**
 * @file Vite配置文件
 * @author caodw
 * @createDate 2024-05-22
 * 
 * 配置Vite构建工具，包含React插件配置和SCSS预处理器支持
 * 设置开发服务器端口和构建输出目录
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`
      }
    }
  }
})