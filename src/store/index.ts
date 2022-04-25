import { App } from 'vue';
/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 17:54:57
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 21:17:55
 */
import { createPinia,defineStore } from "pinia";

interface userState {
  count :number
  name: string
}
export const userStore = defineStore('main',{
    state:():userState=>{
      return {
         count:0,
         name:""
      }
    },
    getters:{
      dobuleCount:(state)=>{return state.count*2}
    },
    actions:{
      
    }
})
export const setupStore = (app :App)=>{
   
   app.use(createPinia())
} 