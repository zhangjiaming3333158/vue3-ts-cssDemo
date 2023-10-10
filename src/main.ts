import { createApp } from 'vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-plus的图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入路由
import router from './router'
import App from './App.vue'

const app = createApp(App)

// 注册element-plus的图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册element-plus
app.use(ElementPlus)
// 注册路由
app.use(router)
app.mount('#app')
