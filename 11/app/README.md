
# 使用vue的路由模块


## 安装
```shell
npm i vue-router
# or
yarn add vue-router
```

## 使用

1. 先创建一个路由目录 router
2. 在router目录中添加 `index.js`
3. 在router/index.js里添加以下代码

```js
import Vue from "vue";
// 它是一个vue插件
import VueRouter from "vue-router";

// 注册插件
Vue.use(VueRouter);

export default new VueRouter({
    mode: "hash"
})
```

在main.js中添加router/index.js里创建的路由对象

```js
import router from "./router"

new Vue({
  // 绑定路由
  router,
  render: h => h(App),
}).$mount('#app')

```

路由里有两个基础选项
1. mode 模式 `hash` | `history`
2. routes 路由规则 []


## 路由的容器组件

路由创建好后 添加进vue实例中了，还需要在App.vue组件添加路由容器 用于展示路由匹配到的组件


`<router-view />` 用于给匹配的路由组件做展示的位置
```html
<router-view />
```