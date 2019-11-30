import Vue from "vue";
// 它是一个vue插件
import VueRouter from "vue-router";

// componets
import Home from "../views/Home";   
import About from "../views/About";
import News from "../views/News";
import NewsDetail from "../views/NewsDetail";
import Admin from "../views/admin/index";
import AdminUser from "../views/admin/User";
import AdminWelcome from "../views/admin/Welcome";
import NotFound from "../views/NotFound";

// 注册插件
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        // {
        // path: "/", 组件路由匹配的路径
        // component:  路径匹配的时候使用的组件
        // },
        {
            path: "/",
            alias: "/index.html",
            component: Home
        },
        {
            path: "/admin",
            component: Admin,
            // 嵌套路由
            // 嵌套路由 当前的路由是谁的children
            // 就必须在当前的组件中去添加路由容器组件 <router-view/>
            children: [
                // 默认子路由
                {
                    path: "",
                    alias: "index.html",
                    component: AdminWelcome
                },
                {
                    // admin/user.html
                    // admin/user

                    // path: "/admin/user", //全路径
                    // alias: "/admin/user.html", 
                    path: "user", // 部分子路径
                    alias: "user.html",
                    component: AdminUser
                }
            ]
        },
        {
            path: "/about",
            alias: "/about.html",
            component: About
        },
        {
            // 路径名称
            path: "/news",
            // 路径别名
            alias: "/news.html",
            component: News
        },
        {
            // :id 是路由的动态参数
            // 动态路由参数可以是在冒号后加任意名称
            // 可以通过组件的created以后的钩子 $route中获取到
            path: "/news/:id.html",
            // alias: "/news/:id.html", 
            name: "news-detail",
            component: NewsDetail
        },
        {
            path: "/404",
            alias: "/404.html",
            component: NotFound
        },
        {
            // 前面匹配不了的路由 交给这里来匹配
            path: "*",
            // component: NotFound
            redirect: "/404.html"
        }
    ]
})

// 什么情况下使用嵌套路由？
// 在页面是嵌套的情况下才使用嵌套路由？


// $route 对象
// 可以在每一个组件中都可以访问
// 声明周期最好是在created以后去访问

// 1. params 用于获取动态路由参数
// 2. query 获取路径中的查询字符串
// 3. fullPath 完全路径
// 4. name 路由的名称 在路由配置中定义后才会有该名称
// 5. path 当前路径


// $router 对象
// new VueRouter() 对象会被添加进每个组件的 $router成员上
// 1. go() 前进
// 2. back() 后退
// 3. push() 添加一个历史记录并跳转至指定页面
// 4. replace() 替换一个历史记录并跳转至指定页面

