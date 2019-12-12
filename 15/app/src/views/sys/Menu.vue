<template>
    <div class="page-admin-menu">
        <MTree @add="handleAdd" @remove="handleRemove" :data="nav" />
        <!-- <Tree :data="menuList" :render="renderTree" /> -->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import actions from "../../store/actions";
    import TreeItem from "../../components/TreeItem"
    import MTree from "../../components/Tree"
    // import admin from "../../utils/http"
    export default {
        data() {
            return {
                menu: []
            }
        },
        mounted() {
            // console.log(this.nav)
        },
        methods: {
            ...mapActions([
                actions.getMenuNav
            ]),
            renderTree(h, { data }) {
                return h(TreeItem, {
                    props: {
                        data
                    }
                })
            },
            deepNav(nav) {
                return nav.map(item => ({
                    ...item,
                    children: item.list
                }))
            },
            getMenuList() {
                // admin.get("/sys/menu/list").then(res => {
                //     console.log(res.data)
                // })
            },
            handleAdd(item) {
                // console.log(data, parent);\
                // parent.push(data);
                // data
                // console.log(data)
                if (!item.list) {
                    this.$set(item, "list", [])
                }
                item.list.push({
                    name: "name",
                    menuId: new Date().getTime()
                })
                

            },
            handleRemove(item, index, data) {
                data.splice(index, 1);
            }
        },
        computed: {
            ...mapGetters([
                "nav"
            ]),
            menuList() {
                console.log(this.deepNav(this.nav));
                return this.deepNav(this.nav);
            }
        },
        components: {
            MTree
        }
    }
</script>

<style lang="less" scoped>

</style>