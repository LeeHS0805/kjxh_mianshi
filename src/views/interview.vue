<template>
    <div class="interview">
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
                    prop="class"
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
    export default {
        name:'interview',
        props:['name'],
        methods: {
            //开始面试按钮
            interview(index,data){
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
                currentPage:1,
                pageSize:8,
                total:null,
                //表单数据
                tableData:[
                    {
                        studentId:'20202020',
                        name:JSON.parse(this.$route.query.path),
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },{
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },
                    {
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },{
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },
                    {
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },
                    {
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },{
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },
                    {
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },{
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },{
                        studentId:'20202020',
                        name:'lxl11',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },
                    {
                        studentId:'20202020',
                        name:'lxl',
                        class:'计算机1',
                        time:'2020-09-01 18:20',
                        status:'1'

                    },



                ],

            }
        },
        mounted(){
            this.total=this.tableData.length;
            console.log(this.$route.query.path)
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
    /*.interview-info{*/
    /*    position: relative;*/
    /*    background-color: white;*/
    /*    width: 50vw;*/
    /*    height: 50vh;*/
    /*    margin: auto;*/
    /*    .base_info{*/
    /*        margin: auto;*/
    /*        font-size: 30px;*/
    /*        letter-spacing: 5px;*/
    /*        font-weight: 500;*/
    /*    }*/
    /*    .base{*/
    /*        width: 30vw;*/
    /*        height: 35vh;*/
    /*        .base_item{*/
    /*            width: 30vw;*/
    /*            display: flex;*/
    /*        }*/
    /*    }*/

    /*}*/
</style>
