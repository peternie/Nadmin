/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 23:36:51
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock';
const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
  '@': pathResolve("src")
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteMockServe({
    mockPath:'./mock',
    supportTs:false,
    watchFiles:true,
    logger:true,
  })],
  base: './',
  resolve: {
    alias
  },
  server: {
    port: 3004,
    host: '0.0.0.0',
    open: true,
  },
})
