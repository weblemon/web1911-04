const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.(jpg|jpeg|png|gif|bmp)$/i,
                // url-loader 把图片加载出来 编译成base64的编码格式
                // use: {
                //     loader: "url-loader",
                //     options: {
                //         limit: 8192,
                //         // 禁止使用es6的模块
                //         esModule: false,
                //     }
                // }
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "/assets/[hash].[ext]",
                    }
                },
            }
        ]
    },

    // 使用插件
    plugins: [
        new VueLoaderPlugin(),
        // html插件
        // 在开发和生产的过程中用于把编译好的js文件自动导入到html中
        // https://github.com/jantimon/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("public", "index.html")
        })
    ],

    // 前端开发服务器配置
    devServer: {
        contentBase: path.resolve("dist"),
        // 端口号
        port: 8080,
        // 页面是否压缩
        compress: true,
    },

    // 开发模式编译速度快
    // 生产模式会把代码压缩 速度慢
    mode: "development", //production 生产模式  // development 开发模式
}
