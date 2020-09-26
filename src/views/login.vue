<template>
  <div class="body">
    <div class="background"></div>
    <div class="form">
      <p>科技协会面试平台后台</p>
      <el-input
        class="input"
        placeholder="请输入账号"
        v-model="userId"
      ></el-input>
      <el-input
        type="password"
        class="input"
        placeholder="请输入密码"
        v-model="password"
      ></el-input>
      <el-button class="input button" type="success" @click="submit"
        >登陆</el-button
      >
    </div>
  </div>
</template>

<script>
import api from "@/api/login.js";

export default {
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    submit() {
      let data = {
        name: this.userId,
        password: this.password,
      };
      api.login(data, this);
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  animation: anm1 0.3s ease-in;
  @keyframes anm1 {
    0% {
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: scale(0.98);
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 1;
      transform: scale(1);
    }
  }
  .background {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/img/bgimg.jpg");
    filter: blur(10px);
    background-size: cover;
    position: fixed;
    z-index: 0;
  }
  .background:before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: blur(10px);
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .form {
    padding: 5px 0 5px 0;
    width: 400px;
    background-color: #fff;
    position: fixed;
    z-index: 2;
    top: 200px;
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #f8f8f8;
    opacity: 0.8;
    > p {
      font-size: 20px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    > .input {
      width: 200px;
      display: block;
      margin: 20px auto;
    }
    > .button {
      width: 100px;
    }
  }
}
</style>
