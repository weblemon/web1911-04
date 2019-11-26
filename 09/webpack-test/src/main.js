import Vue from "vue";
import App from "./App.vue";

console.log(App)

new Vue({
    // el: "#root",
    // template: `
    // <App />
    // `,
    // components: {
    //     App
    // }
    render: h => h(App)
}).$mount("#root")










// const test = require("./es6/test");
// console.log(test);

// 导入test.js中默认导出的成员
// import mTest from "./es6/test";
// console.log(mTest);

// 如果要导入test.js中按需导出的成员
// import mTest, { run, test, a, b } from "./es6/test";
// console.log(mTest, run)

// 如果只需要按需的成员
// import { a, b } from "./es6/test";
// console.log(a, b);


// 如果想要把按需导出的和默认导出的都取出来
// 相当于nodejs的require
// import * as mTest from "./es6/test";

// console.log(mTest);


// 如果在导入的过程中出现变量重名的情况

// import test, { test as testFn } from "./es6/test";

// console.log(test.name);
// testFn()


// import { sum, reduce } from "./es6/lib";

// console.log(sum)



