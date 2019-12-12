<template>
    <div class="menu">
        <div 
            class="menu-item" 
            v-for="(item, index) in data"
            :key="item.menuId"
        >
            <div class="row" @click="expand = !expand">
                <span><Icon type="ios-lock" /> {{item.name}}</span>
                <span style="float: right;">
                    <Button @click="handleAdd(item, index, data)" type="default" size="small" icon="ios-add" />
                    <Button @click="handleRemove(item, index, data)" type="default" size="small" icon="ios-remove" />
                </span>
            </div>
            <div class="child-menu" v-if="expand">
                <MTree @add="handleAdd" @remove="handleRemove" :data="item.list" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MTree",
        data() {
            return {
                expand: false
            }
        },
        props: {
            data: Array
        },
        created() {
            // console.log(this.data);
        },
        methods: {
            handleAdd(item, index, data) {
                return this.$emit("add", item, index, data);
            },
            handleRemove(item, index, data) {
                return this.$emit("remove", item, index, data);
            }
        }
    }
</script>

<style lang="less" scoped>
    .menu-item {
        width: 100%;
        .row {
            width: 100%;
            height: 40px;
            &::after {
                content: "";
                clear: both;
            }
        }
    }
    
    .child-menu {
        padding-left: 20px;
    }
</style>