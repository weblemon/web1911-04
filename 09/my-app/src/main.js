// import Vue from 'vue'

// 把es6模块的导入换成了 nodejs的导入
// esm 开发调试模块 根网页中使用的版本一样
const Vue = require("vue/dist/vue.esm");

// Test.vue是一个es6模块 不是node模块
const Test = require("./components/Test.vue");
// console.log(Vue);
// console.log(Test.default)
// const Test = {
//   template: `
//   <div>Test</div>
//   `
// }

require("./style.less");

new Vue.default({
  el: "#app",
  template: `
  <div>
    <Test />
  </div>
  `,
  components: {
    Test: Test.default
  }
})
