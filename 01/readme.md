# 打开vscode的命令行工具

```
ctrl + `
```


## 本地源代码管理

1. 生成一个git本地仓库 (一个项目只生成一次)

```shell
git init

Initialized empty Git repository in K:/录播/1911/L04/example/.git/
```
命令执行后 会在当前的工作目录里 生成一个隐藏的.git目录 这个目录是当前项目的仓库文件夹 以后就不能删除这个目录了 删除后 代码的记录就没了


2. 添加代码的变更文件到暂存更改里
```shell
git add <文件路径|文件夹路径>
```

3. 提交暂存（确认存储）

```shell
git commit -m "描述"
```