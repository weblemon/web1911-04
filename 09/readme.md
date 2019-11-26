# Vue-cli

vue生态中的一部分，是一个nodejs模块，这个模块是用来辅助开发的一个工具，
用于创建脚手架项目

工作模式：

1. 先创建一个项目
2. 自动编译项目
3. 自动引用css

Webpack的工具来实现的


## 安装
 
### 4.*.* 版本
新版本的vue项目

```shell
npm install -g @vue/cli
```

### 2.9.*
老vue项目
```shell
npm install -g vue-cli
```


## yarn 

https://www.yarnpkg.com/lang/en/

https://www.yarnpkg.com/zh-Hans/docs/install#windows-stable

```shell
npm i -g yarn
```


## 创建项目

```shell
vue create <project-name>
```

如果系统中安装有yarn 管理器，它会询问你是否切换到淘宝的镜像服务器

```shell
?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? (Y/n)
#    这里输入y

# 询问你选择什么模式创建项目
? Please pick a preset: (Use arrow keys)
> default (babel, eslint) # 默认模式
  Manually select features # 手动模式

# 询问你这个 项目使用什么管理器
? Pick the package manager to use when installing dependencies: (Use arrow keys)
> Use Yarn # yarn管理器
  Use NPM # 使用npm

#  切换到项目文件夹
$ cd my-app

# 使用yarn serve来启动项目
$ yarn serve
```


## 项目的基础结构

```
public          静态资源文件目录
src             开发目录
 | assets       资源文件目录
 | components   组件目录
 | App.vue      vue的根组件
 | main.js      项目的启动文件
babel.config.js  babel的配置文件
```

在vue/cli中如果有变量未使用会报错

在vue-cli中有一个webpack
webpack会把你编写的nodejs的模块代码 编译成浏览器使用的普通js代码去运行

Vue/cli 做了什么
只是做了一个基础的脚手架

webpack
1. 帮你编译文件
2. 可以使用模块化来开发项目


## webpack

- [webpack](https://www.webpackjs.com/)

### 安装

```shell
# 项目中添加webpack
yarn add webpack

# 全局安装一个webpack的命令行工具
# yarn global add webpack
npm i -g webpack-cli webpack
```