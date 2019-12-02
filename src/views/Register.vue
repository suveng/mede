<template>
    <div class="register">
        <el-form :model="registerUser" :rules="rules" label-width="80px" class="registerForm" ref="registerForm">
            <el-form-item label="用户名" prop="username">
                <el-input class="text-input" v-model="registerUser.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input class="text-input" v-model="registerUser.password" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item label="重复密码" prop="repeatPassword">
                <el-input class="text-input" v-model="registerUser.repeatPassword" placeholder="请输入密码"/>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">注 册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        components: {},
        //数据模型,校验等
        data() {
            // 定义一个自定义函数,给校验规则使用,用于校验重复密码是否一致
            var validatePass = (rule, value, callback) => {
                if (value !== this.registerUser.password) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                registerUser: {
                    username: "",
                    password: "",
                    repeatPassword: ""
                },
                rules: {
                    username: [
                        {required: true, message: "用户名不能为空", trigger: "change"},
                        {min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur"}
                    ],
                    repeatPassword: [
                        //自定义校验, 重复密码匹配校验
                        {validator: validatePass, trigger: "blur"}
                    ]

                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    //提交注册时,去校验表单字段, valid是校验结果
                    if (valid) {
                        alert("表单校验通过");
                    } else {
                        //校验失败
                        console.log("提交表单: 校验失败");
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .register .registerForm {
        position: absolute;
        left: 40%;
        top: 40%;
        align-content: center;
    }

    .register .registerForm .text-input {
        max-width: 200px;
    }
</style>