<template>
    <div class="body">
        <div class="background"></div>
        <div class="form">
            <p>登陆后台系统</p>
            <el-input class="input"  placeholder="请输入账号"  v-model="userId"></el-input>
            <el-input type="password" class="input"  placeholder="请输入密码"  v-model="password"></el-input>
            <el-button class="input button" type="success" >登陆</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                userId:'',
                password:'',
                loadingShow:false
            }
        },
        methods:{
            toPath(path){
                this.$router.push({path:path});
            },
            submit(){
                this.loadingShow = true;
                setTimeout(()=>{
                    this.axiosPost();
                },500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .body{
        animation:anm1 .3s ease-in;
        @keyframes anm1{
            0%{
                width:100%;
                height:100%;
                opacity:0;
                transform:scale(0.98);
            }
            100%{
                width:100%;
                height:100%;
                opacity:1;
                transform:scale(1.0);
            }
        }
        .background{
            width:100%;
            height:100vh;
            background-image: url('../assets/img/bgimg.jpg');
            filter: blur(10px);
            background-size:cover;
            position:fixed;
            z-index:0;
        }
        .background:before{
            content:'';
            display:block;
            width:100%;
            height:100vh;
            position:absolute;
            filter: blur(10px);
            z-index:1;
            background-color:rgba(255,255,255,.1);
        }
        .form{
            padding:5px 0 5px 0;
            width:400px;
            background-color: #fff;
            position:fixed;
            z-index:2;
            top:200px;
            text-align: center;
            left:0;
            right:0;
            margin:auto;
            border-radius: 10px;
            box-shadow:0px 0px 5px #f8f8f8;
            opacity:0.8;
            >p{
                font-size:20px;
                margin-bottom: 20px;
            }
            >.input{
                width: 200px;
                display: block;
                margin:20px auto;
            }
            >.button{
                width:100px;
            }
        }
    }

</style>
