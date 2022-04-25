<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 17:19:21
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-25 11:38:45
-->
<template>
<div class='container'>
<h1 class="text_1"></h1>
<h2>nie</h2>
<h2>{{store.dobuleCount}}</h2>

<!-- <button @click="store.$reset()">reset</button> -->
</div>
</template>
<script >
import {userStore} from '@/store/index'

export default {
  setup(){
const store = userStore()


setInterval(()=>{
  store.count++ 
},1000)
return {
  store
}
  }
}


</script>
<style scoped lang="less">
     .container{
       .text_1{
         color: red;
       }
     }
</style>