<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-26 19:08:56
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-28 19:18:05
-->
<template>
  <n-layout has-sider style="height: 100vh">
    <n-layout-sider
      collapse-mode="width"
      :width="180"
      :collapsed="userStore().$state.isCollapsed"
      :collapsed-width="64"
      show-trigger="bar"
      bordered
      class="overflow-hidden flex-col"
    >
    <div class="w-full flex items-center justify-center h-14" style="height: 10vh;">213</div>
        <n-menu :collapsed="userStore().$state.isCollapsed" :route="route" style="height: 90vh;overflow: auto;"></n-menu>
    </n-layout-sider>
    <n-layout bordered>
       <n-layout-header class="h-16">
       
       </n-layout-header>
      <router-view></router-view>
    </n-layout>
    
  </n-layout>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
import { useLoadingBar } from 'naive-ui';
import nMenu from './component/nMneu/normal.vue';
import { userRoute } from '@/request/route/ api';
import {userStore} from '@/store/index'
(window as any).$loadingBar = useLoadingBar();
let isCollapsed = ref(false); // 控制是否折叠
let state = reactive({ route: [] });
let { route } = toRefs(state);
onMounted(async () => {
  // console.log('213')
  let res: any = await userRoute().catch(async (err) => {});
  //  console.log(res.data.data,'13123x')
  route.value = res.data.data;
});
</script>
<style scoped></style>
