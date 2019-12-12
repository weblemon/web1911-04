<template>
    <div 
         v-hammer:swipe.right="right"
        class="app-layout" 
        
    >
        <header class="app-layout-header">
            <slot name="header"/>
        </header>
        <div class="app-layout-content"
           
        >
            <slot />
        </div>
        <div v-if="$slots.footer" class="app-layout-footer">
            <slot name="footer"/>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
        methods: {
            right() {
               this.$router.back();
            }
        }
    }
</script>

<style lang="less">
@import "../styles/var.less";
.app-layout {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    .flex(column);
    .app-layout-header {
        width: 100vw;
        flex-basis: @app-layout-header-height;
        flex-shrink: 0;
    }
    .app-layout-content {
        flex: 1;
        overflow: auto;
        background: @app-layout-content-background-color;
    }
    .app-layout-footer {
        width: 100vw;
        flex-basis: @app-layout-footer-height;
        flex-shrink: 0;
    }
}
</style>