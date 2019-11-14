// Vue.component("FormGroup", {
//     template: `
//     <div class="form-group">
//         <label>UserName</label>
//         <input type="email" class="form-control">
//     </div>
//     `
// })

// 组件也可以接受参数
// 在组件中添加props选项就可以接受参数
// Vue.component("FormGroup", {
//     // 接收参数 1. label 2.type 3.palceholder
//     props: ["label", "type", "placeholder"],
//     data() {
//         return {
//             id: "form-group-" + new Date().getTime()
//         }
//     },  
//     template: `
//     <div class="form-group">
//          <label :for="id">{{label}}</label>
//          <input :type="type" :id="id" class="form-control" :placeholder="placeholder">
//      </div>
//     `
// })

// 组件支持对参数进行约束（类型限制）
// 把props选项由之前的数组改变为对象
// key为参数名称 value 为参数的类型

// 默认支持的类型有
// 1. String
// 2. Function
// 3. Boolean
// 4. Array
// 5. Object
// 6. Number
// 7. Symbol
Vue.component("FormGroup", {
    // 接收参数 1. label 2.type 3.palceholder
    props: {
        label: String,
        type: String,
        placeholder: String,
        test: Test
    },
    data() {
        return {
            id: "form-group-" + new Date().getTime()
        }
    },  
    template: `
    <div class="form-group">
         <label :for="id">{{label}}</label>
         <input :type="type" :id="id" class="form-control" :placeholder="placeholder">
     </div>
    `
})