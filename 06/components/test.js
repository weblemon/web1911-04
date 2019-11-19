Vue.component("Test", {
    
    // 组件将要被创建时调用
    beforeCreate() {
        console.log("这个组件将要被创建了")
        // $el是一个选项 当组件被添加到dom以后它就可以被访问到了
        // 在组件还未创建好之前 不能访问当前实例的 数据
        console.log(this.show) // 实例变量 不能访问
        console.log(this.$el)  // 组件的真实dom元素 不能访问
    },
    // 组件已经被创建好了
    created() {
        console.log("组件已经被创建好了")
        // 组件创建好之后就可以访问了
        console.log(this.show) // 可以访问了
        console.log(this.$el)  // 组件的真实dom元素 不能访问
    },
    // 组件的模板编译的html将要被挂载到dom中去了
    beforeMount() {
        console.log("组件将要被挂载了 将要放入dom里了")
        console.log(this.$el)
    },
    // 组件的模板编译的html已经被挂载到dom中去了
    mounted() {
        console.log("组件已经被挂载了 放入dom里了")
        console.log(this.$el)
    },
    // 组件将要被销毁了
    beforeDestroy() {
        console.log("组件将要被销毁了 将要从dom中移除了")
    },
    // 组件已经被销毁了
    destroyed() {
        console.log("组件已经被销毁了 从dom中移除了")
    },
    // 组件将要被更新了
    beforeUpdate() {
        console.log("当前组件的模板将要更新了", this.data)
    },
    // 组件已经更新了
    updated() {
        console.log("当前组件的模板已经更新了", this.data)
    },
    data() {
        return {
            data: ""
        }
    },
    template: `
    <div class="test">
        <h1>Test 组件</h1>
        <input v-model="data" />
    </div>
    `
})


/**
 * 组件的生命周期
 * 每个组件都有一个生命周期
 * 生命周期在不同的阶段有不同的回调函数可以调用
 * 回调函数直接写在组件的选项中可以
 * 1. beforeCreate() 
 * 组件将要被创建时调用
 * 
 * v-if="" 如果用在组件上面 当v-if绑定的值为false时 组件就会被销毁
 */

//  var obj = {}

//  console.log(obj)

//  obj.name = "张三"