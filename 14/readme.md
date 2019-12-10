# Vuex

全局状态（数据）管理容器
管理数据

- 在单个组件中，数据只在单个组件的作用域中
- Vuex 数据共享


## state 存储数据

状态管理器里的原始数据

## getter 订阅数据

可以从原始数据中取出对应的数据

## mutation 修改数据

可以修改原始数据中的数据


vuex（银行） => 

getter 相当于去银行查询余额（查询数据）查询的数据只能用于展示 不能修改
getter 从state里取出的原始数据 只能展示 修改也不会修改到原始数据
getter 可以订阅数据 （当mutation修改了数据 getter会自动分发给订阅者）

mutation 相当于营业员（修改/添加）数据 去state中修改

state 原始数据 相当于金库