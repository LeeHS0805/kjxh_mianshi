import axios from "axios";

const serverAddress ="http://59.67.152.30:8088/stdData?organization=SIPC"

export default {
    async signInfo(vm) {
        //开启遮罩层
        await axios
            .get(serverAddress)
            .then((res) => {
                let data = res.data.stdDataArr
                console.log(data,vm)

                data.forEach(i=>{
                    if (i.stdId==vm.$route.params.studentId){
                        vm.signInfo[0].text=`${i.organizationFirst} ${i.branchFirst}`
                        vm.signInfo[1].text=`${i.reasonFirst}`
                        vm.signInfo[2].text=`${i.organizationSecond} ${i.branchSecond}`
                        vm.signInfo[3].text=`${i.reasonSecond}`
                    }
                })

            })
            .catch((err) => {
                console.log(err);
            });
    }
};
