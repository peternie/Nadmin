<template>
<div class='container'>
 <h1>12313</h1>
 <n-menu :options="state.menuOptions"  />
</div>
</template>
<script setup lang='ts'>
  import { reactive } from 'vue';
import { userRoute } from '@/request/route/ api';
  let state = reactive({menuOptions:[]})
  userRoute({}).then(res=>{
    console.log(res.data.data)
     state.menuOptions = res.data.data
  })
</script>
<style scoped>
</style>
