/* eslint-disable no-async-promise-executor */
import axios from "axios";
import config from '@/config/config.json'

export default {
    //请求全部信息
    getStudentsByRoom:async (data,vm) => {
        console.log('ssss')
        await apiWarp("/getStudentsByRoom",data, "post")
            .then((res) => {
                //处理返回信息
                if (res.data.status === 0) {
                    //插入数据
                    res.data.interviewed.forEach(item=>{
                        item.status=1
                    })
                    res.data.noInterview.forEach(item=>{
                        item.status=0
                    })
                    vm.type=res.data.interview
                    vm.tableData = res.data.noInterview.concat(res.data.interviewed);
                    vm.tableData.forEach(item=>{
                        if(res.data.interview==1)item.time=item.time1;
                        else item.time=item.time2;
                    })
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
    async putFirstInterview(data, vm) {
        console.log(`请求${data.studentId}详细信息`);
        //开启遮罩层
        vm.$store.commit('toggleOverLay')
        await apiWarp('/putFirstInterview', data, 'post').then((res) => {
            console.log(res);
            let data = res.data
            //处理接受信息
            if (data.status === 0) {
                vm.$message({
                    message: "提交成功！",
                    type: "success",
                });
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

    async putSecondInterview(data, vm) {
        console.log(`请求${data.studentId}详细信息`);
        //开启遮罩层
        vm.$store.commit('toggleOverLay')
        await apiWarp('/putSecondInterview', data, 'post').then((res) => {
            console.log(res);
            let data = res.data
            //处理接受信息
            if (data.status === 0) {
                vm.$message({
                    message: "提交成功！",
                    type: "success",
                });
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
