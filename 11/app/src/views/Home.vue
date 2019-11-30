<template>
    <div class="test">
        <Navigator />
        <h1>Home</h1>
        <Button type="primary">首页</Button>
    </div>
</template>

<script>
    import Navigator from "../components/Navigator";
    export default {
        components: {
            Navigator
        }
    }
</script>

<style lang="less" scoped>
    // .test {
    //     width: 100px;
    //     height: 100px;
    //     background: blue;
    // }
</style>