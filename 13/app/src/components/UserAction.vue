<template>
    <div class="user-action">
        <Button @click="$emit('update')" type="success" size="small">修改</Button>
        <Button @click="$emit('delete')" type="error" size="small">删除</Button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
.user-action {
    .flex();
    justify-content: space-between;
}
</style>