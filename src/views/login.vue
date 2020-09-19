<template>
   <div class="login">
       <div class="login-head">
           欢迎登录面试系统
       </div>
       <div class="login-main">
           <el-input class='el-input' label="用户名" v-model="userName" placeholder="用 户 名"></el-input>
           <el-input class='el-input' label="密码" v-model="password" placeholder="密 码"></el-input>
       </div>
   </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                userName:'',
                password:''
            }
        }
    }
</script>

<style lang="scss">
    .login{
        width: 100vw;
        height: 100vh;
        background-image:url("../assets/img/loginBg.png") ;
        overflow: hidden;
        text-align: center;
        .login-head{
            margin-top:15vh;
            font-size: 30px;
            letter-spacing: 10px;
            font-weight: 500;
        }
        .login-main{
            margin: 120px auto;
            width: 20vw;
            .el-input{
                margin-bottom: 50px;
            }

        }
    }

</style>
