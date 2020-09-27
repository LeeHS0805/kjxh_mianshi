<template>
  <div id="admin">
    <el-container class="top">
      <el-header>
        学生创新实践中心 - 科技协会面试平台
        <el-button type="danger" @click="logout">退出平台</el-button>
      </el-header>

      <el-container class="asideNav">
        <el-aside width="150px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="info" @click="asideSwith('info')">
              <i class="el-icon-menu"></i>
              <span slot="title">信息管理</span>
            </el-menu-item>
            <el-menu-item index="interview" @click="asideSwith('interview')">
              <i class="el-icon-menu"></i>
              <span slot="title">开始面试</span>
            </el-menu-item>
          </el-menu>

        </el-aside>

        <el-main>
          <transition name="mainContent">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin",
  mounted() {

  },
  methods: {
    asideSwith(name) {
      this.$router.push({ name: name });
    },
    selectPlace(path) {
      this.$store.commit('changePlace',path)
      this.$router.push('/interview')

    },
    logout() {
      this.$router.push({ name: "login" });
      sessionStorage.clear("uuid");
    }
  }
};
</script>

<style lang="scss" scoped>
#admin {
  .top {
    .el-header,
    .el-footer {
      position: relative;
      background-color: #06397c;
      color: #ffffff;
      text-align: center;
      word-wrap: break-word;
      line-height: 60px;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 4px;
      min-width: 600px;
    }
    .el-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 50px;
    }
  }
  .asideNav {
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
      height: 100vh;
    }
  }

  .el-main {
    background-color: #e9eef3;
    min-width: 600px;
  }
}

.mainContent-enter-active {
  animation: bounceInRight;
  animation-duration: 0.75s;
}
</style>
