<template>
  <div id="app">
    <!-- 
      router-link
      代替a标签 可以在hash模式和history模式中自由切换
     -->
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/news">动态</router-link> -->
    <!-- <a href="/">首页</a>
    <a href="/about">关于</a>
    <a href="/news">动态</a> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
