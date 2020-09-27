<template>
    <div>
        <div class="interview-info">
            <div class="info-button-box">
                <el-button type="primary" class="info-button" @click="saveData">确认信息</el-button>
                <el-button type="primary" class="info-button" @click="back">返回上层</el-button>
            </div>
            <div class="interview-info-content">
                <div class="interview-info-content1" v-for="(item,index) in test" :key="index">
                    <div class="studentTag">{{item.label}}</div>
                    <div class="remark">备注 :</div>
<!--                    <el-button icon="el-icon-plus" circle class="tag-button1" @click="showTagStore"></el-button>-->
                    <div class="tag" >
                        <input type="text" class="tag-box" v-model="item.tag">
                    </div>
                    <el-input v-model="item.score" @blur="checkScore($event)" placeholder="输入得分"
                              maxlength=“3” class="tag-input1" v-if="item.showScore"></el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Message} from 'element-ui'
    import api from "../api/interview";
    export default {
        name: "interview_info",
        data(){
            return{
                isShow:false,
                base:[
                    {
                        label:'c语言',
                        tag:'李鑫磊的c语言真的很好啊',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'计算机相关',
                        tag:'',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'自主学习能力',
                        tag:'',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'其他',
                        tag:'',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'task',
                        tag:'',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'评论',
                        tag:'',
                        score:'',
                        showScore:0
                    }
                ],
                base2:[
                    {
                        label:'进度跟踪',
                        tag:'李鑫磊的c语言真的很好啊',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'小组表现',
                        tag:'',
                        score:'',
                        showScore:1
                    },
                    {
                        label:'评论',
                        tag:'',
                        score:'',
                        showScore:0
                    }
                ],
                tags: [
                    { name: '标签一', type: '' }
                ]
            }
        },
        methods:{
            saveData(val){
                console.log(val);

                if(this.$store.state.type===1) {
                    let data={
                        uuid:sessionStorage.getItem("uuid"),
                        studentId:this.$route.params.studentId,
                        aspect1:this.base[0].score,
                        aspect2:this.base[1].score,
                        aspect3:this.base[2].score,
                        aspect4:this.base[3].score,
                        tag1:this.base[0].tag,
                        tag2:this.base[1].tag,
                        tag3:this.base[2].tag,
                        tag4:this.base[3].tag,
                        task:this.base[4].tag,
                        comment:this.base[5].tag
                    }
                    console.log(data)
                    api.putFirstInterview(data,this)
                }
                if(this.$store.state.type===2){
                    let data={
                        uuid:sessionStorage.getItem("uuid"),
                        studentId:this.$route.query.studentId,
                        aspect1:this.base2[0].score,
                        aspect2:this.base2[1].score,
                        tag1:this.base2[0].tag,
                        tag2:this.base2[1].tag,
                        comment:this.base2[2].tag
                    }
                    api.putSecondInterview(data,this)
                }
            },
            back(){
                this.$router.back(-1)
            },
            showTagStore(){
                this.isShow=false;
            },
            checkScore(val) {
                if(val.target.value!=''){
                    var reg = new RegExp("^(\\d|[1-9]\\d|100)$");
                    if (!reg.test(val.target.value)) {
                        Message({
                            message:'请输入正确的成绩',
                            type:'warning'
                        })
                    }
                }
            }
        },
        computed:{
            test(){
                if(this.$store.state.type===1){
                    return this.base
                }else{
                    return this.base2
                }
            }
        },
        mounted() {
            if(this.$store.state.type==''){
                this.$router.push('/interview')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .interview-info{
        position: relative;
        margin: 50px auto;
        width: 80vw;
        height: 80vh;
        background-color: white;
        .info-button-box{
            width: 100%;
            height: 50px;
            position: absolute;
            top:100px;
            text-align: center;
            .info-button{
                position: relative;
                margin: auto 30px;
                top:-50px;
                transform: translateX(50%);
            }

        }
        .interview-info-content{
            position: absolute;
            top:120px;
            right: 50%;
            transform: translateX(50%);
            width: 70vw;
            .interview-info-content1{
                position: relative;
                width: 60vw;
                margin: auto;
                padding-bottom: 80px;
                line-height: 80px;
                border-bottom: 1px solid gainsboro ;
                text-align: center;
                .studentTag{
                    float: left;
                    text-align: left;
                    font-size: 18px;
                    font-weight: 400;
                    letter-spacing: 4px;
                }
                .tag{
                    display: flex;
                    flex-wrap:wrap ;
                    justify-content: center;
                    border: 1px solid silver;
                    border-radius: 10px;
                    position: absolute;
                    top:50%;
                    transform: translateY(-50%);
                    height: 40px;
                    width: 25vw;
                    line-height: 40px;
                    left:280px;
                    .tag-box{
                        flex: 1;
                        width: 100%;
                        border: none;
                        outline: none;
                        font-size: 15px;
                        text-overflow:ellipsis;
                        overflow: hidden;
                        margin: auto 20px;
                        white-space: nowrap;
                        line-height: 0;
                    }

                }
                .remark{
                    display: inline;
                    position: absolute;

                    float: right;
                    right: 44vw;
                }
                .tag-input1{
                    display: block;
                    width: 100px;
                    float: right;
                }
            }
        }

    }

</style>
