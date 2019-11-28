const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// console.log("当前的启动模式是:", process.env.NODE_ENV)



const mode =  process.env.NODE_ENV
const isDev = mode === "development"


const cssLoader = [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
    "css-loader"
];

const lessLoader = [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
    "css-loader", 
    "less-loader"
];


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
                use: cssLoader,
            },
            {
                test: /\.less$/,
                use: lessLoader,
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
                use: mode === "development" ? {
                    loader: "url-loader",
                    options:{ 
                        esModule: false
                    }
                } : {
                    loader: "file-loader",
                    options:{
                        esModule: false,
                        name: "/assets/images/[hash].[ext]",
                    }
                },
            },
            {
                test: /\.(woff|ttf|woff2|svg)$/i,
                use: mode === "development" ? {
                    loader: "url-loader",
                    options:{ 
                        esModule: false
                    }
                } : {
                    loader: "file-loader",
                    options:{
                        esModule: false,
                        name: "/assets/fonts/[hash].[ext]",
                    }
                },
            }
        ]
    },

    // 使用插件
    plugins: [
        // 在生产之前先清理指定目录里已有的文件
        new CleanWebpackPlugin(),

        // 解析单文件vue文件
        new VueLoaderPlugin(),

        // html插件
        // 在开发和生产的过程中用于把编译好的js文件自动导入到html中
        // https://github.com/jantimon/html-webpack-plugin
        isDev ? new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("public", "index.dev.html")
        }) : new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("public", "index.prod.html")
        }),

        // 分离 单独提取css文件
        // https://www.npmjs.com/package/mini-css-extract-plugin
        new MiniCssExtractPlugin({
            filename: "/assets/css/[name].css",
        }),

        // 压缩css
        // https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
        new OptimizeCssAssetsPlugin(),
        new BundleAnalyzerPlugin({
            // 启动一个页面来分析
            analyzerPort: 3000
        }),
    ],

    // 前端开发服务器配置
    devServer: {
        contentBase: path.resolve("dist"),
        // 端口号
        port: 8080,
        // 页面是否压缩
        compress: true,
    },

    // 解析模块请求的选项
    resolve: {
        // 添加文件扩展的识别
        // 在导入模块时就不用加后缀名称了
        extensions: [".js", ".json", ".vue", ".css", ".less"]
    },

    // 忽略打包模块
    externals: {
        // key 是模块名称
        // value 是模块的全局变量
        vue: "Vue",
        "view-design": "iview",
    },

    // optimization:  {
    //     // 分割文件
    //     splitChunks: {
    //         // 缓存分组中分割
    //         cacheGroups: {
    //             //打包公共模块
    //             commons: {
    //                 chunks: 'initial', //initial表示提取入口文件的公共部分
    //                 minChunks: 2, //表示提取公共部分最少的文件数
    //                 minSize: 0, //表示提取公共部分最小的大小
    //                 name: 'commons' //提取出来的文件命名
    //             }
    //         }
    //     }
    // },

    // 开发模式编译速度快
    // 生产模式会把代码压缩 速度慢
    // mode: "development", //production 生产模式  // development 开发模式
    mode // 靠启动进程传递进来的
}
