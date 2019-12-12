import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import 'animate.css/animate.css'
// import Hammer from "hammerjs"

import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

Vue.config.productionTip = false

// Vue.directive('swipe', {
//   inserted: function (el) {
//     const hammertime = new Hammer(el);
//     // hammertime.get("swipe").set({
//     //   enable: true,
//     //   direction: Hammer.DIRECTION_LEFT
//     // })
//     hammertime.on("swipe", (ev) => {
//       console.log(ev);
//     })
//   }
// })

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
