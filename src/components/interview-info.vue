<template>
    <div>
        <div class="interview-info">
            <div class="info-button-box">
                <el-button type="primary" class="info-button" @click="saveData">确认信息</el-button>
                <el-button type="primary" class="info-button" @click="back">返回上层</el-button>
            </div>
            <div class="interview-info-content">
                <div class="interview-info-content1" v-for="(item,index) in base" :key="index">
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
                tags: [
                    { name: '标签一', type: '' }
                ]
            }
        },
        methods:{
            saveData(val){
                console.log(val);
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
            top:20px;
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
                    width: 30vw;
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

<!--<div class="base_info">基本信息</div>-->
<!--<div class="base">-->
<!--    <div class="base_item">-->
<!--        <span>{{base[0]}}</span>-->
<!--        <el-button type="primary" icon="el-icon-edit" circle></el-button>-->
<!--    </div>-->
<!--    <div class="base_item">-->
<!--        <span>{{base[1]}}</span>-->
<!--    </div>-->
<!--    <div class="base_item">-->
<!--        <span>{{base[2]}}</span>-->
<!--    </div>-->
<!--    <div class="base_item">-->
<!--        <span>{{base[3]}}</span>-->
<!--    </div>-->
<!--    <div class="base_item">-->
<!--        <span>{{base[4]}}</span>-->
<!--    </div>-->
<!--    <div class="base_item">-->
<!--        <span>{{base[5]}}</span>-->
<!--    </div>-->
<!--</div>-->
