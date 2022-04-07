import { createApp } from 'vue'
import App from './App.vue'
//导入pinia
import { createPinia } from 'pinia'
// 引入路由
import router from './router'
import 'uno.css'
import animate from 'animate.css'




const app= createApp(App)
app.use(createPinia())
app.use(router)
app.use(animate)
app.mount('#app')
