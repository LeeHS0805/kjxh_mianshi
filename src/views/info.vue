<template>
  <div id="info">
    <header>
      <div class="warp1">
        <el-input v-model="searchData" placeholder="请输入搜索内容"></el-input>
        <el-button type="success">搜索</el-button>
      </div>
      <div class="warp2">
        <el-button>导出excel</el-button>
        <el-button @click="switchTo('weightChange')">修改权值</el-button>
        <el-button @click="timeChange = !timeChange">开启修改时间面板</el-button>
      </div>
    </header>

    <el-table :data="tableData" @row-click="forDetail" @selection-change="batchChange">
      <el-table-column type="selection" v-if="timeChange"></el-table-column>
      <el-table-column prop="studentId" label="学号" align="center"></el-table-column>
      <el-table-column align="center" prop="name" label="姓名"></el-table-column>
      <el-table-column align="center" prop="class" label="班级"></el-table-column>
      <el-table-column align="center" prop="time1" label="一面时间"></el-table-column>
      <el-table-column align="center" prop="score1" label="一面分数"></el-table-column>
      <el-table-column align="center" prop="time2" label="二面时间"></el-table-column>
      <el-table-column align="center" prop="score2" label="二面分数"></el-table-column>
      <el-table-column label="动作" align="center">
        <template v-slot="scope">
          <div class="action">
            <el-button :disabled="!timeChange" @click.stop="singalOpenChange(scope.row)">修改面试时间</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <transition name="button1">
      <div class="timeChangeSubmit" v-if="timeChange">
        <el-button @click="mulOpenChange(1)">批量修改一面时间</el-button>
        <el-button @click="mulOpenChange(2)">批量修改二面时间</el-button>
      </div>
    </transition>

    <Modal v-model="timeChangeWindow.show" @on-ok="sendChange" @on-cancel="cancelChange">
      <div class="level1" v-if="timeChangeWindow.step1">
        <el-button @click="singalOpenChange2(1)">修改一面时间</el-button>
        <el-button @click="singalOpenChange2(2)">修改二面时间</el-button>
      </div>
      <div class="level2" v-else>
        <p>{{ changeTimes }}时间</p>
        <div class="warp">
          <el-date-picker
            v-model="timeChangeWindow.timeDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-time-select
            v-model="timeChangeWindow.timeHour"
            :picker-options="{
            start: '00:00',
            step: '00:30',
            end: '23:30',
          }"
            placeholder="选择时间"
          ></el-time-select>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  name: "info",
  data() {
    return {
      searchData: "",
      tableData: [],
      timeChange: false,
      timeChangeWindow: {
        step1: true,
        show: false,
        timeDate: "",
        timeHour: "",
        interview: "",
        studentId: [],
      },
    };
  },
  mounted() {
    //获取uuid
    let uuid = "";
    //获取全部信息
    infoApi.getAllStudents(uuid);
    //返回接口例子
    let res = {
      status: 0,
      students: [
        {
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
    //处理返回信息
    if (res.status === 0) {
      this.tableData = res.students;
    } else {
      this.$message({
        type: "error",
        message: res.content,
      });
    }
  },
  methods: {
    //切换到修改权值窗口
    switchTo(name) {
      this.$router.push({ name: name });
    },
    //查询详细信息
    forDetail(row) {
      this.$router.push(`/stuDetails/${row.studentId}`);
    },
    //批量修改时间
    batchChange(selection) {
      //清空数组
      this.timeChangeWindow.studentId.length = 0;
      //加入已选取的元素
      selection.forEach((val) => {
        this.timeChangeWindow.studentId.push(val.studentId);
      });
    },
    //单行修改第一步
    singalOpenChange(row) {
      //清空数组
      this.timeChangeWindow.studentId.length = 0;
      //加入选中单元素
      this.timeChangeWindow.studentId.push(row.studentId);
      //打开修改窗口
      this.timeChangeWindow.show = true;
    },
    //单行修改第二步
    singalOpenChange2(index) {
      //一面还是二面
      this.timeChangeWindow.interview = index;
      //切换到第二步
      this.timeChangeWindow.step1 = false;
    },
    //多选打开
    mulOpenChange(index) {
      //一面还是二面
      this.timeChangeWindow.interview = index;
      //切换到第二步
      this.timeChangeWindow.step1 = false;
      //显示窗口
      this.timeChangeWindow.show = true;
    },
    //发送修改
    sendChange() {
      //拦截第一步
      if (this.timeChangeWindow.step1) {
        return;
      }
      //生成数据
      let data = {
        uuid: "",
        studentId: this.timeChangeWindow.studentId,
        interview: this.timeChangeWindow.interview,
        time:
          this.timeChangeWindow.timeDate + " " + this.timeChangeWindow.timeHour,
      };
      //发送数据
      infoApi.changeTime(data);
      //重制步骤
      this.timeChangeWindow.step1 = true;
      //遮罩开启
      this.$store.commit("toggleOverLay");
      setTimeout(() => {
        this.$store.commit("toggleOverLay");
      }, 1000);
    },
    //取消修改
    cancelChange() {
      console.log(`取消修改`);
      //重制步骤
      this.timeChangeWindow.step1 = true;
    },
  },
  computed: {
    changeTimes() {
      return this.timeChangeWindow.interview === 1 ? "一面" : "二面";
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
#info {
  header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    .warp1 {
      display: flex;
      flex-wrap: nowrap;
      .el-input {
        min-width: 200px;
        max-width: 500px;
      }
    }
    .warp2 {
      display: flex;
      flex-wrap: nowrap;
    }
  }
  .el-table {
    min-width: 700px;
  }
  .timeChangeSubmit {
    min-width: 180px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}

.ivu-modal-content {
  .level1 {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .level2 {
    p {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .warp {
      display: flex;
      justify-content: space-between;
    }
  }
}
.button1-enter-active {
  animation: fadeInUp;
  animation-duration: 0.75s;
}
</style>
