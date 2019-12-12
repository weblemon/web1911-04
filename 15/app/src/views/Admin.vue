<template>
    <div class="page-admin">
      <div class="sider">
        <div class="logo">Logo</div>
        <Menu class="sider-menu" width="auto" :theme="theme" active-name="1">
          <Submenu 
            v-for="item in nav"
            :key="item.menuId"
            :name="item.name"
          >
            <template slot="title">
              <Icon type="ios-paper" />
              {{item.name}}
            </template>
            <MenuItem 
              v-for="child in item.list"
              :name="child.name"
              :key="child.menuId"
              :to="'/admin/' + child.url"
            >
              {{child.name}}
            </MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="main">
        <div class="header">
          {{user.username}}
        </div>  
        <div class="content">
          <div class="padding">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // import admin from "../utils/http";
  import { mapGetters, mapActions } from "vuex";
  import actions from "../store/actions";

  export default {
    data() {
      return {
        theme: "dark",
        menuList: [],
      }
    },
    created(){
      // this.getMenuNav();
      const { getUserInfo, getMenuNav } = actions;

      // 使用action
      this[getUserInfo]();
      this[getMenuNav]();
    },
    methods: {
      ...mapActions([
        actions.getUserInfo,
        actions.getMenuNav
      ]),
      logout() {
        this.$store.dispatch("LOG_OUT");
      }
    },
    computed: {
      ...mapGetters(["token", "user", "nav"]),
    }
  }
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
@header-height: 50px;
.page-admin {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .flex();
  .sider {
    // width: 300px;
    flex-basis: 250px;
    flex-shrink: 0;
    height: inherit;
    .sider-menu {
      height: inherit;
    }
    .logo {
      background: @primary;
      height: @header-height;
      color: #fff;
      line-height: @header-height;
      padding: 0 20px;
      font-size: 16px;
    }
  }
  .main {
    flex: 1;
    height: inherit;
    background: #f1f1f1;
    overflow: hidden;
    .flex(column);
    .header {
      background: #fff;
      flex-basis: @header-height;
      flex-shrink: 0;
    }
    .content {
      flex: 1;
      box-sizing: border-box;
      .padding {
        background: #fff;
        margin: 15px;
        padding: 15px;
        height: 100%;
      }
    }
  }
}
</style>