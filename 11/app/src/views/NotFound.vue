<template>
    <div>
        <h1>404 NotFound</h1>
        <p>您找的页面跑到火星去了,{{num}} 秒之后返回到上一个页面</p>
        <Button @click="$router.back()" type="success">返回之前的页面</Button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 5,
                interval: null
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.num--;
                if (this.num === 0) {
                    clearInterval(this.interval);
                    this.$router.back();
                }
            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.interval);
        }
    }
</script>

<style lang="less" scoped>

</style>