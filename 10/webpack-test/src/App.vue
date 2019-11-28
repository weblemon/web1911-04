<template>
<!-- 把组件的模板写到这里 -->
    <div class="test" @click="fn">
        <Test>xxx</Test>
        <img src="./assets/images/111.jpg" />
    </div>
</template>

<script>
// 在使用组件的时候先导入即可
import Test from "./components/Test.vue";
// import url from "./assets/images/111.jpg";

// console.log(require("./assets/images/111.jpg"))

export default {
    // 把组件的选项拿到这里使用
    mounted() {
        this.run();
    },
    methods: {
        fn() {
            alert(1);
        },
        async test() {
            return 100;
        },
        async run() {
            const data = await this.test();
            console.log(data);
        }
    },
    components: {
        Test
    }
}
</script>

<style>

</style>