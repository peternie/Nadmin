
import  { createWebHashHistory, RouteRecordRaw ,createRouter} from 'vue-router'

import { App } from 'vue'
const routes :RouteRecordRaw[] = [
  {
    name:"index",
    path:'/',
    component:()=>import('@/views/home/index.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export let setupRouter = (app :App)=>{
    app.use(router)
}