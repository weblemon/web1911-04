<template>
    <AppLayout>
        <Navigator 
            slot="header" 
            title="详情"
            showBack
            showMenu
        >
                <Icon slot="menu" name="setting-o" />
        </Navigator>
    </AppLayout>
</template>

<script>
    import AppLayout from "../layouts/AppLayout";
    import Navigator from "../components/Navigator";
    import { Icon } from "vant";
    export default {
        

        components: {
            AppLayout,
            Navigator,
            Icon
        }
    }
</script>

<style lang="less" scoped>

</style>