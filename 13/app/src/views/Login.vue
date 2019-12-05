<template>
    <div class="page-login">
        <div class="main">
        </div>
        <div class="sider">
            <div class="form-box">
                <Form ref="loginForm" @submit.native="login" :rules="rule" :model="form">
                    <h3>管理系统</h3>
                    <FormItem prop="username">
                        <i-Input
                            placeholder="请输入账号"
                            v-model="form.username"
                        >
                            <Icon type="ios-person" slot="prepend"></Icon>
                        </i-Input>
                    </FormItem>

                    <FormItem prop="password">
                        <i-Input 
                            type="password"
                            placeholder="请输入密码"
                            v-model="form.password"
                        >
                            <Icon type="ios-lock" slot="prepend"></Icon>
                        </i-Input>
                    </FormItem>

                    <FormItem prop="captcha">
                        <div class="captcha">
                            <i-Input
                                placeholder="输入验证码"
                                class="captcha-input"
                                v-model="form.captcha"
                                :maxlength="5"
                            >
                                <Icon type="ios-image" slot="prepend"></Icon>
                            </i-Input>
                            <img :src="captchaUrl" @click="reloadCaptcha" />
                        </div>
                    </FormItem>

                    <FormItem>
                        <Button htmlType="submit" long type="primary" >登录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid";
    import admin from "../utils/http";
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                    captcha: "",
                    uuid: uuid()
                },
                rule: {
                    username: [
                        {
                            // 是否必须
                            required: true,
                            // 错误消息
                            message: "账号必须",
                            // 输入框的验证时机
                            trigger: 'blur'
                        },
                        {
                            // 最小长度
                            min: 5,
                            // 最大长度
                            max: 18,
                            // 错误消息
                            message: "账号长度必须5-18位",
                            // 输入框的验证时机
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            // 是否必须
                            required: true,
                            // 错误消息
                            message: "密码必须",
                            // 输入框的验证时机
                            trigger: 'blur'
                        },
                        {
                            // 最小长度
                            min: 5,
                            // 最大长度
                            max: 18,
                            // 错误消息
                            message: "密码长度必须5-18位",
                            // 输入框的验证时机
                            trigger: 'blur'
                        },
                        // {
                        //     validator(rule, value, callback) {
                        //         // console.log(arguments);
                        //         if (/^[A-Z]/.test(value)) {
                        //             callback();
                        //         } else {
                        //             callback(new Error("密码必须以大写字母开始"))
                        //         }
                        //     }
                        // }
                    ],
                    captcha: [
                        {
                             // 是否必须
                            required: true,
                            // 错误消息
                            message: "验证码必须",
                            // 输入框的验证时机
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 5,
                            message: "验证码格式不正确",
                            // 输入框的验证时机
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        computed: {
            captchaUrl() {
                return `http://console.ranyunlong.com:8080/renren-fast/captcha.jpg?uuid=${this.form.uuid}`
            }
        },
        methods: {
            reloadCaptcha() {
                this.form.uuid = uuid();
            },
            login(e) {
                // 阻止默认行为
                e.preventDefault()

                // 利用$refs找到ref标记的表单组件
                // 调用组件内部的validate方法验证所有的参数
                // validate方法返回的是一个promise对象
                this.$refs.loginForm.validate().then(valid => {
                    // then方法中接收一个参数
                    // 参数为true时表示验证通过
                    // 为false验证失败

                    if (!valid) return;
                    admin.post("/sys/login", this.form).then(res => {
                        const { code, token } = res.data; 
                        if (code === 0) {
                            localStorage.setItem("token", token);
                            this.$router.replace("/admin");
                        }
                    })
                })
            }
        },
        created() {
            if (localStorage.getItem("token")) {
                this.$router.replace("/admin");
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../assets/styles/var.less";
.page-login {
    width: inherit;
    height: inherit;
    .flex();
    .main {
        flex: 1;
        height: inherit;
        background: #ccc;
    }
    .sider {
        flex-basis: 350px;
        height: inherit;
        background: #fff;
        .flex(column);
        align-items: center;
        justify-content: center;
        padding: 20px;
        h3 {
            width: 100%;    
            text-align: left;
            margin: 10px 0;
        }
        .captcha {
            .flex();
            .captcha-input {
                width: 140px;
            }
            img {
                height: 32px;
                margin-left: 10px;
            }
        }
    }
}
</style>