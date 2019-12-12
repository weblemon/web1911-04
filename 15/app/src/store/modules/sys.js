// 系统操作的数据放入这里

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