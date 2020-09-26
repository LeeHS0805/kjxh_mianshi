import axios from "axios";
import config from "@/config/config.json";

export default {
  async login(data, vm) {
    //开启遮罩层
    vm.$store.commit("toggleOverLay");
    //发送请求
    await axios
      .post(config.serverAddress + "/login", data)
      .then((res) => {
        if (res.status == 0) {
          //存储uuid
          sessionStorage.setItem("uuid", res.uuid);
          vm.$message({
            message: "登录成功！",
            type: "success",
          });
          //跳转到admin
          vm.$router.push({
            name: 'admin'
          })
        } else {
          vm.$message({
            message: res.msg,
            type: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit("toggleOverLay");
      //tmp
      vm.$router.push({
        name: 'admin'
      })
    }, 1000);
  }
};