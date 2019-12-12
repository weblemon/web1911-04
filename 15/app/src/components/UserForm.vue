<template>
    <Form ref="form" :rules="rules" :model="form">
        <!-- <FormItem
            prop="username"
        >
            <Input prefix="md-person" type="text" placeholder="请输入用户名" />
        </FormItem>

        <FormItem
            prop="password"
        >
            <Input prefix="md-lock" type="password" placeholder="请输入密码" />
        </FormItem>

        <FormItem
            prop="email"
        >
            <Input prefix="md-lock" type="email" placeholder="请输入邮箱" />
        </FormItem>

        <FormItem
            prop="mobile"
        >
            <Input prefix="md-lock" type="number" placeholder="请输入手机" />
        </FormItem> -->
        <FormItem 
            v-for="item in formList"
            :key="item.prop"
            :prop="item.prop"
        >
            <Input 
                :prefix="item.prefix"
                :type="item.type"
                :placeholder="item.placeholder"
                v-model="form[item.prop]"
            />
        </FormItem>
    </Form>
</template>

<script>
    import validatorJs from "validator";
    export default {
        data() {
            return {
                formList: [
                    {
                        prop: "username",
                        type: "text",
                        prefix: "md-person",
                        placeholder: "请输入用户名"
                    },
                    {
                        prop: "password",
                        type: "password",
                        prefix: "md-lock",
                        placeholder: "请输入密码"
                    },
                    {
                        prop: "email",
                        type: "email",
                        prefix: "md-mail",
                        placeholder: "请输入邮箱"
                    },
                    {
                        prop: "mobile",
                        type: "number",
                        prefix: "md-phone-portrait",
                        placeholder: "请输入手机"
                    }
                ],
                form: {
                    userId: 0,
                    username: "",
                    password: "",
                    email: "",
                    mobile: "",
                    status: 1,
                    roleIdList: [],
                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: "用户名称必须",
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 18,
                            message: "用户名长度必须为5-18位",
                            trigger: 'blur',
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: "密码必须",
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 18,
                            message: "密码长度必须为5-18位",
                            trigger: 'blur',
                        }
                    ],
                    email: [
                        {
                            required: true,
                            message: "邮箱必须",
                            trigger: 'blur'
                        },
                        {
                            validator(rule, value, callback) {
                                // validatorJs.
                                if (validatorJs.isEmail(value || "")) return callback();
                                callback(new Error("邮箱格式不正确"))
                            },
                            trigger: "blur"
                        }
                    ],
                    mobile: [
                        {
                            required: true,
                            message: "手机必须",
                            trigger: 'blur',
                        },
                        {
                            validator(rule, value, callback) {
                                // validatorJs.
                                if (validatorJs.isMobilePhone(value || "", "zh-CN")) return callback();
                                callback(new Error("手机格式不正确"))
                            },
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        methods: {
            validate() {
                return this.$refs.form.validate();
            }
        }
    }
</script>

<style lang="less" scoped>

</style>