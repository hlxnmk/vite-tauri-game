// 该文件用于配置整个应用的路由
// 引入路由
import { createRouter, createWebHistory } from 'vue-router'
// 引入组件 
import Content from '../pages/Content.vue'
import Memory from '../pages/Memory.vue'
import SchulteGrid from '../pages/SchulteGrid.vue'
import Cube from '../pages/Cube.vue'
import Babylon from '../pages/Babylon.vue'

//定义路由路径
const routes = [
  { path: '/', component: Content },
  { path: '/content', component: Content },
  { path: '/memory', component: Memory },
  { path: '/schultegrid', component: SchulteGrid },
  { path: '/cube', component: Cube},
  { path: '/babylon', component: Babylon},

]
// 创建路由 
const router = createRouter({
  history: createWebHistory(),//路由模式createWebHashHistory()
  routes, //自定义路由
})
//暴露路由
export default router

