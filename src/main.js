import {createApp} from 'vue'
import App from './App.vue'
// 导入构造函数
import {createPinia} from 'pinia'

// 实例化 Pinia
const pinia = createPinia()
// 创建Vue应用实例app
const app = createApp(App)
// 应用以插件形式挂载Pinia实例
app.use(pinia)
app.mount('#app')
