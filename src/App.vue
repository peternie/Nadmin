<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-28 10:03:54
-->


<template>
  <n-config-provider :theme ='store.theme'>
  <n-loading-bar-provider :loading-bar-style="{loading:'red'}">

      <router-view></router-view>
      </n-loading-bar-provider>
  </n-config-provider>
  
</template>
<script setup lang="ts">
    
    import {themeStore} from '@/store/module/theme'

    let store = themeStore()
   
</script>
<style >
*{
  padding: 0;
  margin: 0;
}
 
</style>
