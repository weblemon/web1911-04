// 用来定义（配置）项目怎么编译的
// 原生的nodejs模块
const path = require("path");

// 编译vue这个插件
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
    // 提供一个编译的入口js文件
    entry: ["@babel/polyfill","./src/main.js"],
    // 提供一个编译好的js输出位置
    output: {
        // 提供一个输出目录
        path: path.resolve("dist"),
        // 编译后的文件名称
        filename: "build.js"
    },

    // module 选项用于处理模块的
    // 在module里添加不同的loader可以处理不同的文件
    //loader 可以把任何文件视为js模块来处理
    module: {
        // 模块解析规则
        // rules是一个数组 可以提供很多的规则来解析不同的文件
        rules: [
            // 每一个规则是一个对象
            {
                // 文件匹配正则
                test: /\.css$/,
                // 使用哪些loader来处理
                // loader处理工具不用自己写
                // webpack官方和第三方提供了很多的loader来处理不同的文件
                // 按照处理样式的laoder和css的loader yarn add style-loader css-loader
                use: ["style-loader", "css-loader"]
            },
            // 需要安装 yarn add less less-loader
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            // 需要安装 yarn add vue-loader vue-template-compiler
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            // 支持babeljs的编译
            // 可以把es6转换成es5
            // 解决老浏览器的问题
            // yarn add babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/polyfill
            // babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime 解决代码es6转换es5的
            // @babel/polyfill 解决某些浏览器不支持es6最新特性 例如 Promise
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },

    // 使用插件
    plugins: [
        new VueLoaderPlugin()
    ],

    // 开发模式编译速度快
    // 生产模式会把代码压缩 速度慢
    mode: "development", //production 生产模式  // development 开发模式
}


// 要处理css 需要2个loader来处理
// style-loader
// 用于在dom中动态生成style标签
// css-loader
// 用于加载css文件


// 要处理less 需要3个loader来处理
// less-loader 它需要依赖less
// style-loader
// css-loader


// url-loader 会把文件编译成 base64的编码
// file-loader 会把文件复制到指定的目录中

// 要解析Vue文件
// vue-loader vue-template-compiler

// eslint 用于解析检查js代码是否合格