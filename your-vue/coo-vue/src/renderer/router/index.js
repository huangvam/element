import router from './routers'
import cookies from 'vue-cookies'
router.beforeEach((to, from, next) => {
  console.log(88, to, from)
  // 判断当前是否登录
  let userKey = cookies.get('userKey')
  if (!userKey && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
