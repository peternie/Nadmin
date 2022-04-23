<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 17:19:21
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 19:19:47
-->
<template>
<div class='container'>
<h1>{{store}}</h1>
<button @click="store.$reset()">reset</button>
</div>
</template>
<script setup lang='ts'>
import {userStore} from '@/store/index'
const store = userStore()

setInterval(()=>{
  store.count++
},1000)

</script>
<style scoped>
</style>