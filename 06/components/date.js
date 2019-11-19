Vue.component("DatePiker", {
    props: {
        startDate: String,
        endDate: String,
    },
    data() {
        return {
            // 第一次的初始变量是父作用域里传递进来的变量
            start: this.startDate,
            end: this.endDate,
        }
    },
    watch: {
        // 监听父作用域传递进来的变量
        // 然后根据变化 手动同步本地的变量
        // 可以和父作用于保持一致
        startDate(value) {
            this.start = value
        },
        endDate(value) {
            this.end = value
        },
        // 当当前组件里的数据发生改变 如果要关联父作用域里的数据
        // 应当使用事件告知父作用域 让父作用域自行修改
        start(value) {
            // 当在属性上加了sync修饰符之后
            // vue会自动在$listeners 当前这个加了sync修饰符的属性名称为事件名称的函数 这个函数接收一个新的参数 用于修改 属性绑定的变量

            // console.log(this)

            // this.$emit("update:start-date", value)
            this.$emit("update:startDate", value)
        },
        end(value) {
            // this.$emit("update:end-date", value)
            this.$emit("update:endDate", value)
        }
    },  
    template: `
    <div class="input-group" style="width:200px">
        <input type="date" class="form-control" v-model="start">
        <span class="input-group-addon">
            至
        </span>
        <input type="date" class="form-control" v-model="end">
    </div>
    `
})


// var obj = {
//     startDate: 123
// }

// var obj1 = {
//     start: obj.startDate === 123
// }


// obj.startDate = 2

