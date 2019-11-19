Vue.component("Card", {
    props: {
        title: {
            default: "标题",
            type: String
        },
        content: String
    },
    data() {
        return {
            cardStyle: {
                width: "500px",
                height: "300px",
                border:"1px solid #000"
            },
            data: "content2"
        }
    },
    methods: {
        run() {
            console.log(this)
        }
    },
    template: `
    <div @click="run" class="card" :style="cardStyle">
        <div class="header" style="border-bottom: 1px solid #000">
            <slot name="header" v-if="$slots.header" />
            <h3 v-else>{{title}}</h3>
        </div>
        <div class="content">
            <slot :a="data" :b="1" :c="2" e="[]" f="1" />
        </div>
    </div>
    `
})


/**
 * 在使用组件时
 * 如果在组件的开始标签和结束标签中间插入 子内容
 * 这些子内容如果是组件 就会被处理成一个组件类型的VNode对象
 *          如果是原生标签 就会被处理成标签类型的一个VNode对象
 * 这些子内容都会被存入 $slots 的default选项里 如果是多个标签就是一个数组
 * 
 * 
 * 插槽
 * 
 * 是vue里内置的组件
 * 
 * 1. 默认插槽
 * 如果你把<slot />写到组件模板的什么地方 使用组件时开始标签和结束标签中间嵌套的内容就会被现实到<slot />标记的地方
 * ```html
 * <slot />
 * ```
 * 2. 具名插槽
 * 具有名称的插槽
 * 
 * 组件内部添加插槽时给它传递一个name属性
 * ```html
 * <slot name="header" />
 * <slot name="content" />
 * ```
 * 在使用组件时,你可以把任意标签传递进组件的具名插槽名称匹配的位置去现实
 * 匹配名称是根据标签上的slot属性和 <slot/>组件的name属性进行匹配
 * ```html
 * <span slot="header">header</span>
 * <h1 slot="content">内容</h1>
 * ```
 * 
 * 如果你只想给具名插槽传递内容进去 不想传递标签进去
 * 可以使用一个vue自带的标签
 * ```html
 * <templte slot="header">这里是header的内容</templte>
 * ```
 * 
 * 同一个具名插槽是可以传递多个内容进去的
 * 
 * ```html
 * <h3 style="color:red" slot="header">标题部分</h3>
 * <template slot="header">这里是header的内容部分</template>
 * ```
 * 
 * 
 * 作用域插槽
 * 
 * 不管最终的内容是被插入到哪个组件里，模板在哪里写 变量就用哪里的变量
 * 
 * <template v-slot:default="d">{{d}}</template>
 * 这里的d是用来接收 组件内部插槽上绑定的数据的是一个形参  随便取名（只要不和当前模板里的变量发生冲突就行）
 * <h1 slot-scope="c">{{c}}</h1>
 * 这里的c是用来接收 组件内部插槽上绑定的数据的是一个形参  随便取名（只要不和当前模板里的变量发生冲突就行）
 * 
 * 作用域插槽两种用法
 * 1. 老用法 slot-scope 直接取出 组件插槽标签上的绑定的数据 是一个对象
 * 2. 新用法 v-slot 指令 该指令必须配合template来使用 否则会报错
 * v-slot:跟的是插槽的名称 默认插槽叫default  具名插槽直接用插槽名称
 */