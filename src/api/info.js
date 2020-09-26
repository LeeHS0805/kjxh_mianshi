/* eslint-disable no-async-promise-executor */
import axios from "axios";
import config from '@/config/config.json'

export default {
  //请求全部信息
  getAllStudents: (uuid, vm) => {
    console.log(`${uuid}请求全部信息`);
    apiWarp("/getStudents", {
        uuid
      }, "post")
      .then((res) => {
        //处理返回信息
        if (res.data.status === 0) {
          //插入数据
          vm.tableData = res.students;
        } else {
          vm.$message({
            type: "error",
            message: res.data.msg,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //获取具体信息
  async getDetails(data, vm) {
    console.log(`请求${data.studentId}详细信息`);
    //开启遮罩层
    vm.$store.commit('toggleOverLay')
    await apiWarp('/getStudentById', data, 'post').then((res) => {
      console.log(res);
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
  changeTime(data, vm) {
    console.log(`发送修改数据`);
    console.log(data);
    //开启遮罩层
    vm.$store.commit('toggleOverLay')
    apiWarp('/setStudentsTime', data, 'post').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit('toggleOverLay')
    }, 1000)
  },

  //修改权值
  changeWeight(data, vm) {
    //开启遮罩层
    vm.$store.commit("toggleOverLay");
    console.log(`发送权值修改`);
    console.log(data);
    //发送请求
    apiWarp('/setWeight', data, 'post').then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
    //关闭遮罩
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