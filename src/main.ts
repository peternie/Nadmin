/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-23 17:59:06
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import {setRouter} from './router'
async function setup() {
const app = createApp(App)
 setRouter(app)
 setupStore(app)
 app.mount('#app');
}
setup()
