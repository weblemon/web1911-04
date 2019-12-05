<template>
    <div class="user">
        <Form @submit.native="handleSearch" class="tools" inline>
        <!-- <Form class="tools" inline> -->
            <FormItem>
                <Input clearable @on-clear="getUserList" v-model="username" class="input" search />
            </FormItem>
            <FormItem>
                <Button htmlType="submit" type="primary">搜索</Button>
            </FormItem>
            <FormItem>
                <Button htmlType="button" type="success" @click="modalTitle='新增'">新增</Button>
            </FormItem>
            <FormItem>
                <Button htmlType="button" type="error">批量删除</Button>
            </FormItem>
        </Form>

        <Table :loading="tableLoading" border :columns="columns" :data="data"></Table>
        <Page 
            class="pager"
            :total="totalCount" 
            show-sizer 
            :current.sync="currPage"
            :page-size="pageSize" 
            :page-size-opts="[2, 3, 5, 10]"
            @on-page-size-change="onPageSizeChange"
        />

        <Modal
            :value="!!modalTitle"
            :title="modalTitle"
        >
            <UserForm ref="userForm" />
            <template slot="footer">
                <Button @click="modalTitle=null">取消</Button>
                <Button @click="handleSubmit" type="primary">确认</Button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import admin from "../../utils/http"
    import UserAction from "../../components/UserAction";
    import UserForm from "../../components/UserForm"
    export default {
        data() {
            return {
                columns: [
                    {
                        title: "#",
                        key: "userId",
                        width: 100,
                    },
                    {
                        title: "用户名",
                        key: "username",
                    },
                    {
                        title: "状态",
                        key: "status",
                        align: "center",
                        width: 100,
                        render: (h, d) => h("Tag", {
                            props: {
                                color: d.row.status === 1 ? "success": "error"
                            }
                        }, d.row.status === 1 ? "正常" : "禁用")
                    },
                    {
                        title: "邮箱",
                        key: "email",
                    },
                    {
                        title: "手机号",
                        key: "mobile",
                    },
                    {
                        title: "创建时间",
                        key: "createTime",
                    },
                    {
                        title: "操作",
                        width: 130,
                        render: (h, data) => h(UserAction, {
                            on: {
                                update:() => {
                                    // console.log("update")
                                    console.log(data);
                                    this.modalTitle = "修改"
                                    // this.$refs.userForm.form = this.$set()
                                    var obj = JSON.parse(JSON.stringify(data.row));
                                    delete obj.password;
                                    this.$set(this.$refs.userForm, "form", obj)
                                },
                                delete:() => {
                                    console.log("delete")
                                }
                            }
                        })
                    }
                ],
                // 模态框的标题
                modalTitle: null,
                // 搜索值
                username: "",
                // 表格的加载状态
                tableLoading: false,
                data: [],
                // 当前页码
                currPage: 1,
                // 当前页面的条数
                pageSize: 2,
                // 总条数
                totalCount: 0,
                // 总页数
                totalPage: 0,
            }
        },
        watch: {
            currPage() {
                this.getUserList();
            },
        },
        created() {
            this.getUserList();
        },
        methods: {
            async getUserList() {
                this.tableLoading = true;
                const { currPage, pageSize, username } = this;
                const response = await admin.get("/sys/user/list", {params: {
                    page: currPage,
                    limit: pageSize,
                    username: username
                }})
                this.tableLoading = false;
                const { code, page } = response.data;
                if (code === 0) {
                    const { currPage, list, pageSize, totalCount, totalPage } = page;
                    this.data = list;
                    // console.log(JSON.stringify(list, null, 2))
                    this.currPage = currPage;
                    this.pageSize = pageSize;
                    this.totalCount = totalCount;
                    this.totalPage = totalPage;
                }
            },
            onPageSizeChange(size) {
                // console.log(size);
                this.pageSize = size;
                this.currPage = 1;
                // this.getUserList();
            },
            handleSearch(e) {
                (e || event).preventDefault();
                this.currPage = 1;
                // console.log("表单提交")
                this.getUserList();
            },
            handleSubmit() {
                this.$refs.userForm.validate().then(res => {
                    if (res) {
                        // console.log(this.$refs.userForm.form);
                        admin.post("/sys/user/save", this.$refs.userForm.form).then(res => {
                            const { code, msg } = res.data;
                            if (code === 0) {
                                this.modalTitle = null;
                                this.$Notice.success({
                                    title: "提示",
                                    desc: "添加成功"
                                })
                            }
                            if (code === 500) {
                                this.$Notice.error({
                                    title: "提示",
                                    desc: msg
                                })
                            }
                        })
                    }
                })
            }
        },
        components: {
            UserForm
        }
    }
</script>

<style lang="less" scoped>
    .tools {
        .input {
            width: 200px;
        }
    }
    .pager {
        margin: 15px 0;
    }
</style>