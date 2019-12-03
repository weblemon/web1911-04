import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Login from "../views/Login";
import Admin from "../views/Admin";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    alias: "/login.html",
    component: Login
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      loginRequired: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeResolve((to, from, next) => {
  // 如果要去的页面需要验证登录
  if (to.meta.loginRequired) {
    // 检查本地存储中是否保存了登录后的token
    const token = localStorage.getItem("token")
    // 如果有放行
    if (token) return next();
    // 否则去登录页面
    next({
     path: "/login.html"
    })
  } 
  return next()
})

// router.beforeEach()

export default router
