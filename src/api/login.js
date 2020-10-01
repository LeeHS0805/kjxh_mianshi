import axios from "axios";
import config from "@/config/config.json";

export default {
  async login(data, vm) {
    //开启遮罩层
    vm.$store.commit("toggleOverLay");
    //发送请求
    await axios
      .get(config.serverAddress + `/login?name=${data.name}&password=${data.password}`)
      .then((res) => {
        let data = res.data
        if (data.status == 0) {
          //存储uuid
          sessionStorage.setItem("uuid", data.uuid);
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
            message: data.msg,
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
    }, 1000);
  }
};
