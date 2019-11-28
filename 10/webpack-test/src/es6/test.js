// es6的导出语法
// 1. 默认导出
// 使用export default来默认导出
export default {name: "xxx", age:1};
// export default function () {}
// export default name = 1;

// 2. 按需导出
// 需要导出谁就在谁前面加export
export function run() {}
export function test() {
    console.log("test");
}

export const a = 1;
export const b = 2;

// 可以把lib.js的成员合并到当前js导出
// export * from "./lib";

// 如果只想合并lib.js里指定的成员到当前js导出
// 在花括号中去指定就可以了
export { sum } from "./lib";







// 如果在nodejs里导出一个函数
// module.exports = function() {}


// module.exports = {
//     run() {

//     },
//     test() {

//     }
// }

