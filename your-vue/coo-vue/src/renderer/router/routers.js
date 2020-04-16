import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: require('../views/home.vue').default
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/login.vue').default
  }
]

export default new Router({
  // mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
