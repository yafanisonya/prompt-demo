import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

// 创建Vue应用
const app = createApp(App)

// 使用路由
app.use(router)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue全局错误:', err)
  console.info('错误组件:', vm)
  console.info('错误信息:', info)
}

// 挂载应用
app.mount('#app') 