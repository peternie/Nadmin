/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-26 16:32:53
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router';
import './index.css' // tailwindcss 
import naive from 'naive-ui'
async function setup() {
const app = createApp(App)
 setupStore(app)
setupRouter(app)
 app.use(naive)
 app.mount('#app');
}
// createApp(App).mount('#app')
 
setup()
