export default {
    namespaced: true,
    state: {
        iList: [2, 2, 3],
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        userList(state) {
            return state.iList;
        }
    }
}