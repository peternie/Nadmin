/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-26 13:40:28
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-27 18:37:41
 */

import  { createWebHashHistory, RouteRecordRaw ,createRouter} from 'vue-router'

import { App } from 'vue'
const routes :RouteRecordRaw[] = [
  {
    name:"index",
    path:'/',
    redirect:'/name',
    component:()=>import('@/views/Layout/index.vue'),
    children:[
      {
        path:'name',
        name:'name',
        component:()=>import('@/views/page/name/index.vue')
      }
    ]
  },
  {
    name:'login',
    path:'/login',
    component:()=>import('@/views/Login/index.vue')
  },
  {
    name: 'not-found-page',
    path: '/:pathMatch(.*)*',
    component: ()=>import('@/views/notFound/index.vue'),
   
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export let setupRouter = (app :App)=>{
    app.use(router)
}