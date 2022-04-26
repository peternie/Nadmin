/*
 * @Descripttion: 
 * @version: 
 * @Author: 聂一方
 * @Date: 2022-04-23 16:56:26
 * @LastEditors: 聂一方
 * @LastEditTime: 2022-04-26 16:30:12
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router';
async function setup() {
const app = createApp(App)
 setupStore(app)
setupRouter(app)

 app.mount('#app');
}
// createApp(App).mount('#app')
 
setup()
