<template>
    <div class="page">
        <div class="header">
            <h3>Lemon admin</h3>
            
            <div class="menu">
                <router-link class="item" to="/admin/user.html">用户管理</router-link>
                <router-link class="item" to="/admin/user.html">个人中心</router-link>
            </div>
        </div>
        <div class="main">
            <div class="aside"></div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    @import "../../assets/style/var";
    .page {
        width: 100vw;
        height: 100vh;
        // background: red;
        overflow: hidden;
        .flex(column);
        .header {
            flex-shrink: 0;
            flex-basis: 60px;
            border-bottom: 1px solid #ccc;
            .flex(row);
            justify-content: space-between;
            padding: 0 10px;
            .menu {
                .flex(row);
                align-items: center;
                .item {
                    margin: 0 10px;
                }
            }
        }
        .main {
            background: #ff88bb;
            flex: 1;
            .flex(row);
            .aside {
                flex-shrink: 0;
                flex-basis: 220px;
                background: orangered;
            }
            .content {
                flex: 1;
                background: orange;
            }
        }
    }
</style>