<template>
    <div class="test">
        <Navigator />
        <h1>News</h1>

        <ul>
            <li @click="jump(item)" v-for="item in news" :key="item.id">
                {{item.title}}
                <!-- <router-link :to="'/news/'+item.id+'.html'">{{item.title}}</router-link> -->
            </li>
        </ul>
    </div>
</template>

<script>
    import Navigator from "../components/Navigator";
    export default {
        data() {
            return {
                news: [
                    {
                        id: 1,
                        title: "哈哈是的"
                    },
                    {  
                        id: 2,
                        title: "您好的发生"
                    }
                ]
            }
        },
        components: {
            Navigator
        },
        methods: {
            jump(data) {
                // window.console.log(data);

                // 在每个页面中可以使用$router的对象
                // 这个$router 就是new VueRouter()的实例
                // 它是被混入到每个组件中的
                data;

                // $router 对象
                // new VueRouter() 对象会被添加进每个组件的 $router成员上
                // 1. go() 前进
                // 2. back() 后退
                // 3. push() 添加一个历史记录并跳转至指定页面
                // 4. replace() 替换一个历史记录并跳转至指定页面

                // this.$router.back();

                // 要么使用路径
                // this.$router.push("/news/1.html")
                // this.$router.push({
                //     path: "/news/1.html"
                // })

                // 要么使用路由名称加参数
                // this.$router.push({
                //     name: "news-detail",
                //     params: {
                //         id: 1
                //     }
                // })

                // this.$router.push({
                //     path: `/news/${data.id}.html`
                // })

                // 使用路由名称来跳转页面
                // this.$router.push({
                //     name: "news-detail",
                //     params: data
                // })

                // replace 和push 参数一样 功能不一样
                // replace会把历史记录去掉
                // this.$router.replace({
                //     name: "news-detail",
                //      params: data
                // })

            }
        }
    }
</script>

<style lang="less" scoped>

</style>