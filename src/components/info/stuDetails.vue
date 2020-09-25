<template>
  <div id="stuDetails">
    <header>
      <p>详细面试信息</p>
      <el-button @click="back">返回</el-button>
    </header>
    <div class="first">
      <p>一面信息</p>
      <el-table :data="all.data">
        <el-table-column prop="interviewer" label="面试官"></el-table-column>
        <el-table-column prop="aspect1" label="aspect1"></el-table-column>
        <el-table-column prop="aspect2" label="aspect2"></el-table-column>
        <el-table-column prop="aspect3" label="aspect3"></el-table-column>
        <el-table-column prop="aspect4" label="aspect4"></el-table-column>
        <!-- tag -->
        <el-table-column prop="task" label="task进度"></el-table-column>
        <el-table-column prop="comment" label="评论"></el-table-column>
      </el-table>
      <p class="score">
        <span>平均分：</span>
        <span class="ans">{{ all.score1 }}</span>
      </p>
    </div>
    <el-divider></el-divider>
    <div class="second">
      <p>二面信息</p>
      <el-table></el-table>
      <p class="score">
        <span>平均分：</span>
        <span class="ans">{{ all.score2 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api/info.js";

export default {
  name: "stuDetails",
  data() {
    return {
      all: {
        status: 0,
        data: [
          {
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
      },
    };
  },
  props: {
    id: String,
  },
  mounted() {
    //获取新生的详细信息
    api.getDetails(this.id, this);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
#stuDetails {
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      font-size: 28px;
      font-weight: bold;
    }
    .el-button {
      align-self: center;
    }
  }
  p {
    font-size: 22px;
    font-weight: bold;
  }
  .el-table {
    margin-top: 15px;
  }
  .score {
    margin-top: 15px;
  }
}
</style>
