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
     <component :is="isCollapsed?nMenu:miniMenu" :route="route"></component>
     </n-layout-sider>
      <n-layout bordered >
        <router-view></router-view>
      </n-layout>
      <n-button @click="isCollapsed = !isCollapsed"> dd</n-button>
  </n-layout>
</template>
<script setup lang='ts'>
import {reactive, ref} from 'vue'

import nMenu from './component/nMneu/normal.vue'
import miniMenu from './component/nMneu/mini.vue'
// import {userLogin } from '@/request/user/api'
import {userRoute} from '@/request/route/ api'



let isCollapsed = ref(false) // 控制是否折叠
</script>
<style scoped>
</style>