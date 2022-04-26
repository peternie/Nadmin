<template>
  <n-layout has-sider >
     <n-layout-sider
     style="min-height: 100vh;"
      collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        :collapsed="isCollapsed"
        show-trigger="bar"
        bordered
     >
         <component :is="isCollapsed?nMenu:miniMenu"></component>
     </n-layout-sider>
      <n-layout-header bordered >
        颐和园路
      </n-layout-header>
      <n-button @click="isCollapsed = !isCollapsed"> dd</n-button>
  </n-layout>
</template>
<script setup lang='ts'>
import {ref} from 'vue'

import nMenu from './component/nMneu/normal.vue'
import miniMenu from './component/nMneu/mini.vue'
import {login } from '@/request/index'
login({name:'123',password:'456'})
let isCollapsed = ref(false) // 控制是否折叠
</script>
<style scoped>
</style>