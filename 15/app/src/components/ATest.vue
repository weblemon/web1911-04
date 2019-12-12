<template>
    <div class="a-test">
       {{num}}
       {{u}}

       <Button @click="updateUser">修改用户名</Button>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$store)
        },
        methods: {
            updateUser() {
                this.$store.commit("updateUser",  ["1", "2"])
            }
        },
        computed: {
            u() {
                return this.$store.getters.getUser;
            },
            num() {
                return this.$store.getters.getNum;
            }
        }
    }
</script>

<style lang="less" scoped>
    .a-test {
        width: 300px;
        height: 300px;
        border: 1px solid red;
    }
</style>