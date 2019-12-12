<template>
  <div id="app">
    <transition
      :enter-active-class="enter"
      :leave-active-class="leave"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: "",
      leave: ""
    }
  },
  watch: {
    $route(to, from) {
      const toList = to.path.split("/").filter(value => value)
      const fromList = from.path.split("/").filter(value => value)
      if (toList.length > fromList.length) {
        // 前进
        // console.log("前进")
        this.enter = "page-transition-time fadeInRight"
        this.leave = "page-transition-time fadeOutLeft"
      } else if (toList.length < fromList.length) {
        // 后退
        // console.log("后退")
        this.enter = "page-transition-time fadeInLeft"
        this.leave = "page-transition-time fadeOutRight"
      }
    } 
  }
}
</script>

<style>
.page-transition-time {
  animation-duration: .5s;
}
</style>
