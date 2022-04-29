/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-26 13:40:28
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-28 19:18:58
 */

import  { createWebHashHistory, RouteRecordRaw ,createRouter} from 'vue-router'

import { App } from 'vue'
const routes :RouteRecordRaw[] = [
  {
    name:"index",
    path:'/',
    redirect:'/exception/404',
    component:()=>import('@/views/Layout/index.vue'),
    children:[
      {
        path:'exception/404',
        name:'name',
        component:()=>import('@/views/page/name/index.vue')
      },
      {
        path:'exception/403',
        name:'403',
        component:()=>import('@/views/page/demo/index.vue')
      }
    ]
  },
  {
    name:'login',
    path:'/login',
    component:()=>import('@/views/Login/index.vue')
  },
  // {
  //   name: 'not-found-page',
  //   path: '/:pathMatch(.*)*',
  //   component: ()=>import('@/views/notFound/index.vue'),
   
  // }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(to,from,next)
  // console.log(window.$loadingBar)
  window.$loadingBar?.start()
  next()
})
router.afterEach(()=>{
  window.$loadingBar?.finish()
  // next()
})
export let setupRouter = (app :App)=>{
    app.use(router)
}