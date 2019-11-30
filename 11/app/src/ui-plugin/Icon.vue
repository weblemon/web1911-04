<template>
    <span 
        v-if="name" 
        :style="{
            color,
            fontSize
        }" 
        :class="'glyphicon glyphicon-' + name" 
    >
    </span>
</template>

<script>
    export default {
        name: "Icon",
        props: {
            name: {
                type: String,
                required: true
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
                        return false;
                    } else if(value > 60) {
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
    }
</script>

<style>

</style>