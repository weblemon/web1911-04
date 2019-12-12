import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 把vuex创建的store添加进实例中
import store from "./store"
import Ui from "view-design";
import "view-design/dist/styles/iview.css"

Vue.use(Ui);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      user: {
        name: "zhangsan",
        age: 20
      }
    }
  },
}).$mount('#app')
