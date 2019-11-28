# webpack-dev-server

全局安装

```shell
npm i -g webpack-dev-server webpack webpack-cli
# or
# yarn global add webpack-dev-server

# 全局安装的只需要在命令行里输入 webpack-dev-server 就可以启动项目了
# 要在项目的根目录输入命令
# 项目的根目录中必须包含 webpack.config.js
```

局部安装

```shell
yarn add webpack-dev-server webpack webpack-cli -D
# or
npm i webpack-dev-server webpack webpack-cli -D
```
局部安装的模块启动时需要在package.json的`scripts`选项中配置启动命令

```json
"scripts": {
    "start:dev": "webpack-dev-server",
    "build": "webpack-dev-server"
},
```

使用`npm` 和`yarn` 都可以启动项目
```shell
npm start:dev
npm run build
# or
yarn start:dev
yarn build
```

在webpack的配置文件中需要添加插件

`html-webpack-plugin` 用于自动合并编译好的文件到指定的 html模板文件中;

`file-loader` 和 `url-loader` 可以用来解决vue单文件组件 导入图片的问题

```js
module.exports = {
    ...,
    plugins: [
        new HtmlWebpackPlugin({
            // 模板的文件名称
            filename: "index.html",
            // 模板的文件地址
            // 使用相对路径或者绝对路径
            template: path.resolve("public", "index.html")
        })
    ],
    devServer: {
        // 用于修改开发服务器的端口号 避免与后台服务器的端口发生冲突
        port: 8080,
        // 代理配置
        proxy: {
            
        }
    }
}
```


让模块支持.vue后缀名称的文件



`cross-env` 模块用于捕获进程启动时的进程信息

```shell
npm i cross-env -D
# or
yarn add cross-env -D
```


提取css文件

在开发时 css文件在js中
在生产时 需要把css单独提取出来 提高网页的加载速度


`mini-css-extract-plugin` 提取css文件
```shell
npm i mini-css-extract-plugin -D
# or
yarn add mini-css-extract-plugin -D
```

`optimize-css-assets-webpack-plugin`

```shell
yarn add optimize-css-assets-webpack-plugin -D 
# or
npm i yarn add optimize-css-assets-webpack-plugin -D
```


## 清理生产过的文件

`clean-webpack-plugin`

```shell
npm i clean-webpack-plugin -D
# or
yarn add clean-webpack-plugin -D
```


## 打包分析

`webpack-bundle-analyzer` 打包时查看文件的体积分布情况

```shell
yarn add webpack-bundle-analyzer -D
# or
npm i webpack-bundle-analyzer -D
```