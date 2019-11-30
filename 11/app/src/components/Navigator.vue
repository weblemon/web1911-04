<template>
    <div>
        <router-link
            v-for="item in pages"
            :to="item.path"
            :key="item.name"
        >
        {{item.name}}
        </router-link>
        <!-- 在vue开发模式的环境中
            如果使用v-for指令
            必须给当前指令的元素或者组件添加一个key
            这个key用于虚拟dom 比较循环的元素中哪个元素发生了变化
            这个key必须是唯一的
         -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pages: [
                    {
                        name: "首页",
                        path: "/"
                    },
                    {
                        name:"关于",
                        path: "/about.html"
                    },
                    {
                        name: "动态",
                        path: "/news.html"
                    }
                ]
            }
        },
    }
</script>

<style lang="less" scoped>

</style>