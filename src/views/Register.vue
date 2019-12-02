<template>
    <div class="register">
        <el-form ref="form" :model="registerUser"  label-width="80px" class="registerForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerUser.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerUser.password" placeholder="请输入密码"/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        components: {},
        data(){
            return {
                registerUser: {
                    username: "",
                    password: "",
                }
            }
        }
    }
</script>

<style scoped>
.register .registerForm{

}
</style>