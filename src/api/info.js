// import axios from "axios";

export default {
  getAllStudents(uuid) {
    console.log("请求全部信息", uuid);
  },
  getDetails(stdId) {
    console.log(`请求${stdId}详细信息`);
  },
  changeTime(data) {
    console.log(`发送修改数据`);
    console.log(data);
  }
};