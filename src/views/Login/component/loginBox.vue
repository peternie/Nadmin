<!--
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-27 20:45:30
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-28 19:25:26
-->
<template>
<div class='container '>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
     
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
      <n-form ref="formRef" :model="state.form" :rules="rules">
      <n-form-item path="userName" label="用户名">
      <n-input v-model:value="state.form.userName" > </n-input>
      </n-form-item>
        <n-form-item path="password" label="密码">
      <n-input v-model:value="state.form.password" type="password"> </n-input>
      </n-form-item>
    </n-form>

      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

       
      </div>

      <div class="flex flex-row-reverse">
      <n-button type="info" @click="handleValidateButtonClick" class="text-blue-500 h-10 w-20" >login</n-button>
      </div>
    </form>
  </div>
</div>
</div>
</template>
<script setup lang='ts'>
// import { userRoute } from '@/request/route/ api';
import {reactive,ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import {userLogin } from '@/request/user/api'
let state =  reactive({
  form:{
    userName:'13071071123',
    password:'123456'
  }
})
let rules={
  userName:[
    {
      required:true,
      message:'请输入正确的用户名！'
    }
  ],
  password:[
    {
      required:true,
      message:'请输入正确的密码！'
    }
  ]
}
let router = useRouter()
let formRef = ref<any>(null)
let handleValidateButtonClick =()=>{
  // console.log('1312',)
    formRef.value?.validate(async (vali:any)=>{
      console.log(vali)
      if(!vali){
        // console.log('nie')
       let res = await userLogin(state.form).catch(err=>{
         console.log(err)
       })
      //  console.log(res)
       if(res?.status == 200){
        //  console.log(res)
          router.push('/')
       }
      }else{
          console.log(false)
      }
      // console.log(state.form)
    }).catch((err :any)=>{
      console.log(err)
    })
}
   defineEmits(['submit'])
</script>
<style scoped>
</style>