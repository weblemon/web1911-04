<template>
    <div class="b-test">
        {{num}}
        {{user}}

        <Button @click="add">添加</Button>
    </div>
</template>

<script>
    export default {
        mounted() {
            // this.$store.commit()
        },
        methods: {
            add() {
                // commit("mutation的成员key名称")
                // commit 用于触发matation
                this.$store.commit("updateNum")
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            num() {
                return this.$store.getters.getNum;
            }
        }
    }
</script>

<style lang="less" scoped>
    .b-test {
        width: 300px;
        height: 300px;
        border: 1px solid blue;
    }
</style>