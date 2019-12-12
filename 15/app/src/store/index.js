// 导入Vue
import Vue from "vue";
// 导入Vuex
import Vuex from "vuex";
// 导入Axios
import admin from "../utils/http";

import sys from "./modules/sys";
import user from "./modules/user";
import actions from "./actions";

Vue.use(Vuex);

const token = localStorage.getItem("token");
const expire = localStorage.getItem("expire");


const store = new Vuex.Store({
    state: {
        token,
        expire,
        user: null,
        nav: [],
    },

    // mutations可以添加很多的函数
    // 不同的函数修改state中不同的值
    // mutations是有store的commit方法来触发修改的
    mutations: {
        // 修改token的
        setToken(state, data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("expire", data.expire);
            state.token = data.token;
            state.expire = data.expire;
        },
        setUser(state, user) {
            state.user = user;
        },
        clearToken(state) {
            state.token = null;
            state.expire = null;
            localStorage.removeItem("token");
            localStorage.removeItem("expire");
        },
        setNav(state, nav) {
            state.nav = nav;
        }
    },
    // getters 可以添加很多的函数
    // 不同的函数用于订阅state中不同的key的值
    getters: {
        token: state =>  state.token,
        user: state => state.user || {},
        nav: state => state.nav || [],
    },
    actions: {
        async [actions.login](store, args) {
            const { data } = await admin.post("/sys/login", args);
            const { code, token, expire } = data;
            if (code === 0) {
                // action把收到的异步数据 使用mutation写入到state里
                store.commit("setToken", {token, expire});
                return true
            }
        },
        async [actions.getUserInfo](store) {
            const response = await admin.get("/sys/user/info", {
                headers: {
                    token: store.getters.token
                }
            });
            const { code, user } = response.data;
            if (code === 0) {
                store.commit("setUser", user);
            }
        },
        async [actions.getMenuNav]({commit}) {
            const response = await admin.get("/sys/menu/nav");
            const { code, menuList } = response.data;
            if (code === 0) {
                commit("setNav", menuList)
            }
        },
        LOG_OUT(store) {
            store.commit("clearToken")
        }
    },
    modules: {
        sys,
        user
    }
})


export default store;