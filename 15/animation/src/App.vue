<template>
 <div class="app">
   <!-- 
<button @click="show = !show">切换</button>
    <button 
      v-for="(item, index) in list"
      :key="index"
      @click="selectIndex = index"
    >
      {{item}}
    </button>

   <transition-group name="fade2">
     <div 
        class="box" 
        :key="item" 
        v-for="(item, index) in list" 
        v-show="index === selectIndex"
        :style="{
          background: 'rgba('+ random().join(',') +')'
        }"
      >
       {{item}}
     </div>
   </transition-group> -->

  <!-- <button @click="show = !show">切换</button>
   <transition
    enter-class=""
    enter-to-class=""
    enter-active-class="m-enter"
    leave-active-class="m-leave"
   >
    <div class="box" v-if="show"></div>
   </transition> -->

  <!-- <button @click="show = !show">切换</button>
   <transition
    enter-active-class="in-left"
    leave-active-class="out-left"
   >
     <div class="box" v-if="show"></div>
   </transition> -->
   <Banner />
 </div>
</template>

<script>
import Banner from "./components/Banner";
export default {
  data() {
    return {
      show: false,
      list: [1, 2, 3],
      selectIndex: 0
    }
  },
  methods: {
    random() {
      return [Math.random() * 255, Math.random() * 255, Math.random() * 255]
    }
  },
  components: {
    Banner
  }
}
</script>

<style>

@keyframes inLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes outLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.in-left {
  animation: inLeft .3s linear;
}

.out-left {
  animation: outLeft .5s linear;
}


.box {
  width: 500px;
  height: 500px;
  background: red;
}

.m-enter {
  opacity: 1;
  background: blue;
  transition: all 0.5s linear;
}

.m-leave {
  opacity: 0;
  background: red;
  transition: all 0.8s linear;
}

/* 入场动画 */
/* .fade2-enter {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 10s linear;
}
.fade2-enter-to {
  opacity: 1;
} */
/* 出场动画 */
/* .fade2-leave {
  opacity: 1;
}

.fade2-leave-active {
  transition: opacity 5s linear;
}

.fade2-leave-to {
  opacity: 0;
} */



.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.3s linear;
}
.fade2-enter-to,
.fade2-leave {
  opacity: 1;
}

</style>
