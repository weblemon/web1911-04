/**
 * 注意：
 * 组件的prop属性在遇到需要驼峰的时候
 * 1. 在组件或者实例中使用时 prop可以直接写成驼峰
 * 2. 在html里使用的时候 必须使用烤串名称 否则会被浏览器转为小写 vue就识别不出来
 * 
 * 组件的prop都使用 小驼峰
 */

 const Button = {
    props: {
        htmlType: {
            type: String,
            default: "button"
        },
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String
        },
        // 布尔类型的参数 可以不传递 默认值为false
        // 另外boolean类型的参数 不传值也可以 只要在使用组件时，组件上写了改属性就为true
        block: Boolean
    },
    template: `
    <button
        @click="click"
        :type="htmlType" 
        :class='["btn", {
            "btn-default": type === "default",
            "btn-primary": type === "primary",
            "btn-success": type === "success",
            "btn-danger": type === "danger",
            "btn-lg": size === "lg",
            "btn-sm": size === "sm",
            "btn-xs": size === "xs",
            "btn-block": block
        }]'
    >
        <slot />
    </button>
    `,
    methods: {
        click(event) {
            // console.log("click")
            // console.log(this)
            // 在使用组件的时候 用@添加的事件都会被绑定到组件实例中的$listeners
            // this.$listeners["aaa"]()
            // console.log(this.$listeners)

            // 专门用于触发 $listeners 里的一个方法 vm.$emit() <vm当前的组件实例>
            // 要触发listeners里的哪一个函数 就在$emit("listenerName")
            // 如果listeners没有 不会执行任何的代码
            // 如果有则执行
            // this.$emit("click", event, {name: "zhangsan "})
            // this.$emit("click", event, {name: "zhangsan "})
            this.$emit("click", event);
        },
        mousedown(event) {
            this.$emit("a-mousedown", event)
        }
    },
}


/**
 * 插槽
 * 用于分发 当前组件使用时 嵌套的内容
 * 
 * ```js
 * <Button>
 *  嵌套的内容
 * </Button>
 * ```
 * 
 * 插槽在vue里是一个Vue内置的组件
 * ```html
 * <slot></slot>
 * <slot />
 * ```
 */


 /**
  * 默认情况下 组件是没有事件的
  * 
  * 在Vue中只有真实的dom元素才有事件，才能监听事件，需要在真实的dom元素上监听事件然后处理
  * 如果组件需要事件 需要在组件实例内部 先监听原生事件 然后触发组件实例$listeners里收集的事件处理函数来实现
  * 
  * 在使用组件的时候 用@添加的事件都会被绑定到组件实例中的$listeners
  */


// 同时给一个组件注册两个名称 方便在网页里或者 组件中去使用该组件
Vue.component("IButton", Button);
Vue.component("Button", Button);