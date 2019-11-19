Vue.component("ISwitch", {
    props: {
        // data: Boolean,
        value: Boolean,
    },
    methods: {
        change() {
            // this.on = !this.on
            // this.$emit("change")
            console.log(this)
            this.$emit("input", !this.value)
        }
    },
    template: `
    <div 
        :class="['switch', {
            'switch-on': value
        }]"
        @click="change"
    >
        <div class="switch-btn"></div>
    </div>
    `
})


/**
 * 双向绑定 既可以获取父作用域（使用组件时的上下文）
 * 也可以展示 变量
 * 
 * 当你给一个组件使用v-model指令时
 * 
 * v-model会做两件事
 * 1. 给组件内部传递一个value的prop 隐式方式传递
 * 2. 给v-model里绑定的变量绑定一个事件 (input事件)
 * 这个input事件会根据传递进去的新值 修改绑定的变量
 */