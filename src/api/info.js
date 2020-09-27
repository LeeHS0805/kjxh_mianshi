/* eslint-disable no-async-promise-executor */
import axios from "axios";
import config from '@/config/config.json'

export default {
  //请求全部信息
  async getAllStudents(uuid, vm) {
    console.log(`${uuid}请求全部信息`);
    vm.$store.commit('toggleOverLay')
    await apiWarp("/getStudents", {
        uuid
      }, "post")
      .then((res) => {
        let data = res.data
        //处理返回信息
        if (data.status === 0) {
          //插入数据
          vm.tableData = data.students;
        } else {
          vm.$message({
            type: "error",
            message: data.msg,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    vm.$store.commit('toggleOverLay')
  },

  //获取具体信息
  async getDetails(data, vm) {
    console.log(`请求${data.studentId}详细信息`);
    //开启遮罩层
    vm.$store.commit('toggleOverLay')
    await apiWarp('/getStudentById', data, 'post').then((res) => {
      let data = res.data
      //处理接受信息
      if (data.status === 0) {
        vm.data1 = data.firstView;
        vm.data2 = data.secondView;
        vm.score1 = data.score1;
        vm.score2 = data.score2;
      } else {
        vm.$message({
          type: "error",
          message: data.msg,
        });
      }
    }).catch(err => {
      console.log(err);
    })
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit('toggleOverLay')
    }, 1000)
  },

  //修改面试时间
  async changeTime(data, vm) {
    console.log(`发送修改数据`);
    //开启遮罩层
    vm.$store.commit('toggleOverLay')
    await apiWarp('/setStudentTime', data, 'post').then((res) => {
      let data = res.data;
      if (data.status == 0) {
        vm.$message({
          type: 'success',
          message: data.msg
        })
      } else {
        vm.$message({
          type: 'error',
          message: data.msg
        })
      }
    }).catch((err) => {
      console.log(err);
    })
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit('toggleOverLay')
    }, 1000)
    //重新获取数据
    this.getAllStudents(data.uuid, vm)
  },

  //修改权值
  async changeWeight(data, vm) {
    //开启遮罩层
    vm.$store.commit("toggleOverLay");
    console.log(`发送权值修改`);
    //发送请求
    await apiWarp('/setWeight', data, 'post').then((res) => {
      console.log(res);
      let data = res.data;
      if (data.status == 0) {
        vm.$message({
          type: 'success',
          message: data.msg
        })
      } else {
        vm.$message({
          type: 'error',
          message: data.msg
        })
      }
    }).catch(err => {
      console.log(err);
    })
    //关闭遮罩
    setTimeout(() => {
      vm.$store.commit('toggleOverLay')
    }, 1000)
  },

  //搜索数据
  async searchApi(data, vm) {
    console.log(`搜索请求${data.keyWorld}`);
    vm.$store.commit('toggleOverLay')
    await apiWarp('/searchStudent', data, 'post').then((res) => {
      let data = res.data
      if (data.status == 0) {
        vm.tableData = data.students
      } else {
        vm.$message({
          type: 'error',
          message: data.msg
        })
      }
    }).catch(err => {
      console.log(err);
    })
    setTimeout(() => {
      vm.$store.commit('toggleOverLay')
    }, 1000)
  }
};

const apiWarp = (url, data, methods) => {
  return new Promise(async (resolve, reject) => {
    try {
      let target = config.serverAddress + url
      if (methods === "post") {
        resolve(await axios.post(target, data));
      } else if (methods === "get") {
        resolve(await axios.get(target));
      }
    } catch (err) {
      reject(err);
    }
  });
}