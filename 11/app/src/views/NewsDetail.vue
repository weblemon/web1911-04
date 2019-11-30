<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: ""
            }
        },
        created() {
            // 在每个组件的created声明周期以后钩子里都可以获取到路由的参数
            // console.log(this.$router)

            // $route
            // 1. params 用于获取动态路由参数
            // 2. query 获取路径中的查询字符串
            // 3. fullPath 完全路径
            // 4. name 路由的名称 在路由配置中定义后才会有该名称
            // 5. path 当前路径

            // window.console.log(this.$route)
            // $route 用于获取路由的参数信息
            this.title = "您当前的新闻id是:" + this.$route.params.id
        }
    }
</script>

<style lang="less" scoped>

</style>