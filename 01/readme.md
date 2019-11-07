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


4. 查看分支

```shell
git branch
```

5. 创建分支

```shell
git branch <name>
```

在哪个分支上使用branch 创建分支 就是从这个分支上复制一个新的副本

6. 删除分支
```shell
git branch -D <name>
```

7. 切换分支

```shell
git chekcout  <branchName>
```

8. 合并分支

```shell
git merge <otherBranch>
```

9. 配置参数

```shell
# --global 可以不写 以后每次创建仓库都需要在配置一遍
# --global 加上后 以后的所有项目默认用这两个参数
git config --global user.email "填入你的邮箱地址"
git config --global user.name "姓名"
```


## 远程仓库

1. github 这个免费托管代码的网站
[github](https://github.com/)

支持两种模式的仓库
- Public 每个人都可以访问 和复制 不可以修改
- Private 未经过允许的用户不能访问 和复制 以及修改

2. gitlab 需要自己公司搭建
3. 阿里云 腾讯 收费的私有仓库
4. gitee 码云 免费


1. 在本地添加一个远程仓库的地址
git remote add <仓库名称> <仓库地址>
```shell
git remote add github https://github.com/weblemon/web1911-04.git
# github 是仓库名称
# https://github.com/weblemon/web1911-04.git 是仓库地址
```

2. 查询当前有哪些远程仓库
```shell
git remote
```

3. 删除远程仓库
git remote remove <仓库名称>
```shell
git remote remove github
```

4. 上传代码到远程仓库

git push <仓库名称> <分支名称>

```shell
git push github dev
```

5. 绑定默认分支

git push -u <仓库名称> <分支名称>
```shell
# 第一次绑定
git push github dev

# 第二次提交
git push
```


6. 克隆项目

在一台新设备上 完全没有项目的情况下 可以克隆(clone 复制)项目

git clone 仓库地址
```shell
git clone https://github.com/weblemon/web1911-04.git
```

克隆的项目 默认的远程仓库名称 叫origin（原始仓库） 
远程仓库的地址 默认是当前克隆的地址

使用命令查看当前的仓库


获取仓库的地址
git remote get-url <仓库名称>

```shell
# 查看当前的仓库列表
git remote
> origin

# 获取当前仓库的地址
git remote get-url origin
> https://github.com/weblemon/web1911-04.git
```

-f 强制覆盖记录
不要在公司的项目中操作这个命令 否则你要被xxxx
```shell
git push -f
```


7. 同步远程仓库

拉取同步
git pull

```shell
git pull
```

在提交代码到远程仓库时 如果本地和远程仓库不同步的话 会报错

```shell
git push
To https://github.com/weblemon/web1911-04.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/weblemon/web1911-04.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```


在修改代码之前 先同步然后在修改
如果提交时 和远程仓库不同步 也是先同步拉取 然后在提交


8. 下载主分支以外的其他分支

主分支已经克隆好了，想要下载dev开发分支
在这里使用fetch命令

git fetch <仓库名称> <远程分支名称>:<本地分支名称> 中间使用冒号隔开
`远程分支名称`可以和`本地分支名称`不同名 建议使用相同的名称 免得项目管理起来混乱

```shell
git fetch github dev:dev
# github 是仓库名称
# 冒号前面的dev是远程仓库的dev分支代码
# 冒号后面的dev是下载到本地仓库时叫什么名
```


```shell
ssh-keygen -t rsa -C "849291425@qq.com"
Generating public/private rsa key pair.
# 输入你要生成的秘钥文件叫什么名称
# 默认叫id_rsa 输入完按回车
Enter file in which to save the key (C:\Users\RanYunlong/.ssh/id_rsa):
# 输入一个秘钥的密码
Enter passphrase (empty for no passphrase):
# 重复输入密码
Enter same passphrase again:
```