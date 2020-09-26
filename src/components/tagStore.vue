<template>
    <div class="tagStore">
        <div class="tagButton">
            <el-button type="primary" class="tag-button" @click="saveData">确定</el-button>
            <el-button type="primary" class="tag-button" @click="back">返回上层</el-button>
        </div>
        <div class="tagHead">
            Tag 文本库
        </div>
        <div class="tagBox">

        </div>
    </div>
</template>

<script>
    export default {
        name: "tagStore",
        methods: {
            saveData(){
                this.$parent.isShow=true;
            },
            back(){
                this.$parent.isShow=true;
            }
        }
    }
</script>

<style lang="scss">
    .tagStore{
        display: flex;
        flex-direction: column;
        margin: 50px auto;
        width: 80vw;
        height: 80vh;
        background-color: white;
        .tagButton{
            .tag-button{
                position: inherit;
                margin: auto 30px;
                transform: inherit;
            }
        }
        .tagHead{
            font-size: 25px;
            margin-top: -6vh;
            font-weight: 500;
            letter-spacing: 4px;
        }
        .tagBox{
            width: 60%;
            border: 1px solid gainsboro;
        }
    }

</style>
