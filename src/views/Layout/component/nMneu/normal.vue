<template>
<div>
 <n-menu :options="transformAuthRoutesToSearchMenus(props.route)" 
 :collapsed="collapsed"
 :collapsed-width="64"
  accordion @update:value='menuChange'/>
</div>
</template>
<script setup lang='ts'>
import {transformAuthRoutesToSearchMenus} from '@/util/createRoute'
  // import { reactive } from 'vue';
  import { routerChange } from '@/common/route';
  import {useRouter} from 'vue-router'
  let props =  defineProps({
     route :[],
     collapsed :Boolean
   })
   const router = useRouter()
   let menuChange = (val :any,v :any)=>{
       routerChange(v.routePath,router)
   }
   
// let collapsed = true
</script>
<style scoped>
</style>
