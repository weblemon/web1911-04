# vuex

简单的多组件数据共享， 可以里用 Vue实例来共享数据

如果是复杂的应用里用Vue实例来共享数据就不安全了

## getters

用于提供给组件内部订阅数据
订阅的方式：

- 使用vuex插件混入的$store
```js
this.$store.gettres['getterName']
```
- 使用vuex的助手函数

```js
mapGetters(['getterName'])
```

## state

state vuex的原始数据

- 初始化原始数据
- 原始数据尽量使用mutations来修改


## mutations

- 修改原始数据

修改方式
```js
this.$store.commit('mutationName', payload)
```

```js
{
    ...mapMutations(['mutationName']),
}
// 把他混入到组件的methods选项中取

this.mutationName(payload);
```


## actions

- 用于处理异步提交数据
用法:

```JS
this.$store.dispatch('actionName', args)
```

```js
{
    ...dispatch(['actionName']),
}
// 把他混入到组件的methods选项中取

this.actionName(args);
```


## modules

用于模块化管理数据

```js
export default {
    // 使用命名空间
    namespaced: true,
    state: {
        userList: [1,2,3],
    },
    getters: {
        userList(state) {
            return state.userList;
        }
    },
    mutations: {

    },
    actions: {
        
    },
}
```


## mapGetters助手函数

假如在你的store中有getters token 和user

```js
getters: {
    token(state) {
        return state.token
    },
    user(state) {
        return state.user;
    }
},
```

你可以使用mapGetters 把他们取出来

```js
mapGetters([])
```

```js
function mapActions(arr) {
    const o = {};
    arr.forEach(key => {
        o[key] = function(args) {
            return this.$store.dispatch(key, args)
        }
    })

    return o;
}

function mapState(arr) {
    const o = {};
    arr.forEach(key => {
        o[key] = function() {
            return this.$store.state[key]
        }
    })
    return o;
}

function mapMutations(arr) {
    const o = {};
    arr.forEach(key => {
        o[key] = function(args) {
            return this.$store.commit("key", args)
        }
    })
    return o;
}

function mapGetters(arr) {
    const o = {};
    arr.forEach(key => {
        o[key] = function(args) {
            return this.$store.getters[key];
        }
    })
    return o;
}
```