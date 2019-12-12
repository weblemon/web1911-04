<template>
    <span class="row">
        <span>
            <Icon class="icon" type="ios-folder-outline" />
            <span>{{data.name}}</span>
        </span>
        <span class="right">
            <Button 
                :style="{
                    marginRight: '5px'
                }" 
                type="default" 
                size="small" 
                icon="ios-add" 
            />
            <Button
                icon="ios-remove" 
                type="default" 
                size="small"
            />
        </span>
    </span>
</template>

<script>
    export default {
        props: {
            data: Object
        },
        created() {
            // this.$set(this.data, "expand", true)
        }
    }
</script>

<style lang="less" scoped>
    .row {
        display: inline-block;
        width: 100%;
        .icon {
            margin-right: 8px;
        }
        .right {
            float: right;
            margin-right: 32px;
        }
    }
</style>