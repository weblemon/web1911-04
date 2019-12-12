<template>
    <AppLayout>
        <Navigator 
            slot="header" 
            title="首页"
            showBack
            showMenu
            backText="返回"
        >
                <Icon slot="menu" name="setting-o" />
        </Navigator>

        <router-link to="/detail">detail</router-link>
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