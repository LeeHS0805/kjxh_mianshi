<template>
    <div id="app">
        <el-container>
            <el-header>学生创新实践中心 - 科技协会面试平台
                <el-button type="danger">退出平台</el-button>
            </el-header>

            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">
                <router-link to="/info" tag="span">查看信息</router-link>
              </span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-setting"></i>
                            <span slot="title">
                <router-link to="/interview" tag="span">开始面试</router-link>
              </span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default{
        name:'admin',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">

    .el-header, .el-footer {
        position: relative;
        background-color: #06397c;
        color: #ffffff;
        text-align: center;
        line-height: 60px;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 4px;
    }
    .el-button{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        right: 50px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100vh;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    router-link{
        width: 100%;
    }
</style>
