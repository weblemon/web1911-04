<template>
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
</template>

<script>
    export default {
        name: "Button",
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
        methods: {
            click(event) {
                this.$emit("click", event);
            },
            mousedown(event) {
                this.$emit("a-mousedown", event)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>