<template>
    <div class="app-navigator">
        <div class="back">
            <slot name="back" />
            <span v-if="showBack">{{backText}}</span>
        </div>
        <div class="title">
            {{title}}
            <slot/>
        </div>
        <div class="menu">
            <slot name="menu" />
            <span v-if="menuText">{{menuText}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            backText: {
                type: String,
                default: "返回"
            },
            menuText: String
        },
        created() {
            this.checkRoute();
        },
        data() {
            return {
                showBack: false
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            checkRoute() {
                const list = this.$route.path.split("/").filter(value => value)
                if (list.length > 0) {
                    this.showBack = true;
                } else {
                    this.showBack = false;
                }
            }
        }
    }
</script>

<style lang="less">
@import "../styles/var.less";
@navigator-color: #fff;
@navigator-height: @app-layout-header-height;
.app-navigator {
    height: @navigator-height;
    background: @primary;
    .flex(row);
    justify-content: space-between;
    align-items: center;
    color: @navigator-color;
    .back,
    .menu {
        min-width: 150px;
        height: @navigator-height;
        line-height: @navigator-height;
        text-align: center;
    }
}
</style>