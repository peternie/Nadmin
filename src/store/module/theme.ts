import { defineStore } from "pinia";
import { darkTheme } from 'naive-ui';
interface theme {
   color :string
   theme : any
   fontSize :string
}
export const themeStore = defineStore('themeStore',{
  state:() :theme=>{
    return {
      color : '',
      theme : null,
      fontSize:'12px',

    }  
  }
})