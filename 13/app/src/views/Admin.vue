<template>
    <div class="page-admin">
      <div class="sider">
        <div class="logo">Logo</div>
        <Menu class="sider-menu" width="auto" :theme="theme" active-name="1">
          <Submenu 
            v-for="item in menuList"
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
            <!-- <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    内容管理
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <MenuGroup title="内容管理">
                <MenuItem name="1">
                    <Icon type="md-document" />
                    文章管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="md-chatbubbles" />
                    评论管理
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="统计分析">
                <MenuItem name="3">
                    <Icon type="md-heart" />
                    用户留存
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="md-leaf" />
                    流失用户
                </MenuItem>
            </MenuGroup> -->
        </Menu>
      </div>
      <div class="main">
        <div class="header">
          
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
  import admin from "../utils/http";
  export default {
    data() {
      return {
        theme: "dark",
        menuList: [],
      }
    },
    created(){
      this.getMenuNav();
    },
    methods: {
      async getMenuNav() {
        const response = await admin.get("/sys/menu/nav");
        // console.log(response)
        const { code, menuList } = response.data;
        if (code === 0) {
          this.menuList = menuList;
          // console.log(JSON.stringify(this.menuList, null, 2));
        }
      }
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