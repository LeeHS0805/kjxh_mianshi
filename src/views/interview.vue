<template>
    <div class="interview">
        <span class="span">面试地点:</span>
        <el-select v-model="value" placeholder="请选择" class="el-select">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <el-table
                class="el-table-column"
                :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                max-height="90vh">
            <el-table-column
                    prop="studentId"
                    label="学号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="Class"
                    label="班级"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    width="120">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="interview(scope.$index, tableData[scope.$index])"
                            type="text"
                            size="small">
                        开始面试
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                class="el-pagination1"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[1, 3, 5, 8]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>

    <script>
    import api from "../api/interview";

    export default {
        name:'interview',
        props:['name'],
        methods: {
            //开始面试按钮
            interview(index,data){
                this.$store.commit('changeType',this.type)
                this.$router.push({
                    name:'interviewInfo',
                    params:{
                        studentId:data.studentId,
                        name:data.name,
                        class:data.class,
                        time:data.time,
                        status:data.status
                    }
                });
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;    //动态改变
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;    //动态改变
            }
        },
        data() {
            return {
                type:'',
                currentPage:1,
                pageSize:8,
                total:null,
                //表单数据
                tableData:[],
                options: [{
                    value: '1',
                    label: '115内'
                }, {
                    value: '2',
                    label: '115外'
                }, {
                    value: '3',
                    label: '221'
                }, {
                    value: '4',
                    label: '222'
                }],
                value: ''

            }
        },
        mounted(){
            this.total=this.tableData.length;

        },
        watch:{
            value(){
                api.getStudentsByRoom({
                    uuid:sessionStorage.getItem('uuid'),
                    room:this.value
                },this)
            }
        }
    }
</script>

<style lang="scss">
    .el-table-column{
        position: relative;
        margin: auto;
        padding-left: 40px;
        padding-bottom: 40px;
    }
    .el-pagination1{
        margin-top:20px;
    }
    .span{
        display: inline-block;
        position: relative;
        left: 400px;
        font-size: 15px;
        font-weight: 500;
    }
    .el-select{
        left:50%;
        transform: translateX(-50%);
        margin: 20px auto;
    }
</style>
