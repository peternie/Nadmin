/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 17:09:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 17:24:14
 */

import { App } from 'vue'
import  {createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


let routes :RouteRecordRaw[] = [
  {
    path:"/home",
    name:'home',
    component:()=>import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

/**
 * @description 挂载路由
 * @author nie
 * @date 23/04/2022 17-18
 */
export function setRouter(app :App){
    app.use(router)
}