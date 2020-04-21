import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cookies from 'vue-cookie'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 检测当前是否为登录状态
  if (to.path !== '/login' && !Cookies.get('cooKey')) {
    // 不为登录状态,导向登录页面
    next({ path: '/login' })
  }
  console.log(10, to)
  next()
})
export default router
