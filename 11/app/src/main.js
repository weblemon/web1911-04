import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "bootstrap/dist/css/bootstrap.css"
import UI from "./ui-plugin"

Vue.use(UI);

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  // 1. to 到哪个页面
  // 2. from 来自哪个页面
  // 3. next() 是否放行
  // window.console.log(from, to);
  if (to.path === "/admin") {
    return next({path: "/404.html"});
  }
  next();

  // next 和路由的push方法参数一致
})

new Vue({
  // 绑定路由
  router,
  render: h => h(App),
}).$mount('#app')
