/* eslint-disable no-async-promise-executor */
import axios from "axios";

export default {
  //请求全部信息
  getAllStudents: (uuid, vm) => {
    console.log("请求全部信息");
    apiWarp("/getStudents", uuid, "post")
      .then((res) => {
        console.log(res);
        //处理返回信息
        if (res.status === 0) {
          vm.tableData = res.students;
        } else {
          vm.$message({
            type: "error",
            message: res.content,
          });
        }
      })
      .catch((err) => {
        //临时处理
        let res = {
          status: 0,
          students: [{
              studentId: 1,
              name: "ss",
              class: "sdf",
              time1: "s",
              time2: "sdddfs",
              score1: 44,
              score2: 66,
            },
            {
              studentId: 551,
              name: "ss",
              class: "sdf",
              time1: "s",
              time2: "sdddfs",
              score1: 123,
              score2: 5,
            },
          ],
          msg: "",
        };
        vm.tableData = res.students

        console.log(err);
      });
  },
  //获取具体信息
  getDetails(stdId, vm) {
    console.log(`请求${stdId}详细信息`);
    //开启遮罩层
    vm.$store.commit('toggleOverLay')
    apiWarp('getStudentById', stdId, 'post').then((res) => {
      console.log(res);
      //处理接受信息
      if (res.status === 0) {
        vm.first = res.data[0];
        vm.second = res.data[1];
        vm.score1 = res.score1;
        vm.score2 = res.score2;
      } else {
        vm.$message({
          type: "error",
          message: res.message,
        });
      }
    }).catch(err => {
      console.log(err);
      //临时
      let res = {
        status: 0,
        data: [{
            interviewer: "徐浩瀚",
            aspect1: 98,
            aspect2: 92,
            aspect3: 98,
            aspect4: 92,
            tag1: [12, 23, 34, 45],
            tag2: [12, 45],
            tag3: [12, 34, 45],
            tag4: [],
            task: "完成task3",
            comment: "这⼩⼦可以",
          },
          {
            interviewer: "彭业诚",
            aspect1: 98,
            aspect2: 92,
            aspect3: 98,
            aspect4: 92,
            tag1: [12, 23, 34, 45],
            tag2: [12, 45],
            tag3: [12, 34, 45],
            tag4: [],
            task: "完成task3",
            comment: "这⼩⼦可以",
          },
        ],
        score1: 97,
        score2: 95,
      };
      if (res.status === 0) {
        vm.first = res.data[0];
        vm.second = res.data[1];
        vm.score1 = res.score1;
        vm.score2 = res.score2;
      }
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
    apiWarp('setWeight', data, 'post').then((res) => {
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
      if (methods === "post") {
        resolve(await axios.post(url, data));
      } else if (methods === "get") {
        resolve(await axios.get(url));
      }
    } catch (err) {
      reject(err);
    }
  });
}