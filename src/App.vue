<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 23:44:51
-->


<template>
  <n-config-provider :theme ='store.theme'>
      <layout class="layout"></layout>
  </n-config-provider>
  
</template>
<script setup lang="ts">
    import layout from '@/views/Layout/index.vue'
    
    import {themeStore} from '@/store/module/theme'
import { darkTheme } from 'naive-ui';

    let store = themeStore()
   
</script>
<style scoped>
   .layout{
     min-height: 100vh;
     
   }
</style>
