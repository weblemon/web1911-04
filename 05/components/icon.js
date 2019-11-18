Vue.component("Icon", {
    props: {
        name: {
            type: String,
            // 设置参数为必须 如果不传递则在控制台中抛出错误信息
            required: true
            // 可以给name参数设置默认值
            // default: "asterisk"
        },
        color: {
            type: String,
            default: "#000"
        },
        size: {
            type: Number,
            default: 14,
            // 自定义参数验证器函数
            validator(value) {
                if (value < 10) {
                    console.error("size 不能小于10")
                    return false;
                } else if(value > 60) {
                    console.error("size 不能大于60")
                    return false;
                }
                return true
            }
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        fontSize() {
            return this.size + "px"
        }
    },
    // 如果必传的参数 没有传递 使用v-if来节省dom性能
    template: `
        <span 
            v-if="name" 
            :style="{
                color,
                fontSize
            }" 
            :class="'glyphicon glyphicon-' + name" 
        >
        </span>
    `,
    // template: `
    //     <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
    // `
})