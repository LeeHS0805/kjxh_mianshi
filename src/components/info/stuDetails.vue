<template>
  <div id="stuDetails">
    <header>
      <p>详细面试信息</p>
      <el-button @click="back">返回</el-button>
    </header>
    <div class="first">
      <p>一面信息</p>
      <el-table :data="data1">
        <el-table-column prop="interviewer" label="面试官"></el-table-column>
        <el-table-column prop="aspect1" label="aspect1"></el-table-column>
        <el-table-column prop="aspect2" label="aspect2"></el-table-column>
        <el-table-column prop="aspect3" label="aspect3"></el-table-column>
        <el-table-column prop="aspect4" label="aspect4"></el-table-column>
        <el-table-column prop="tag1" label="tag1"></el-table-column>
        <el-table-column prop="tag2" label="tag2"></el-table-column>
        <el-table-column prop="tag3" label="tag3"></el-table-column>
        <el-table-column prop="tag4" label="tag4"></el-table-column>
        <el-table-column prop="task" label="task进度"></el-table-column>
        <el-table-column prop="comment" label="评论"></el-table-column>
      </el-table>
      <p class="score">
        <span>平均分：</span>
        <span class="ans">{{ score1 }}</span>
      </p>
    </div>
    <el-divider></el-divider>
    <div class="second">
      <p>二面信息</p>
      <el-table :data="data2">
        <el-table-column prop="interviewer" label="面试官"></el-table-column>
        <el-table-column prop="aspect1" label="aspect1"></el-table-column>
        <el-table-column prop="aspect2" label="aspect2"></el-table-column>
        <el-table-column prop="aspect3" label="aspect3"></el-table-column>
        <el-table-column prop="aspect4" label="aspect4"></el-table-column>
        <el-table-column prop="tag1" label="tag1"></el-table-column>
        <el-table-column prop="tag2" label="tag2"></el-table-column>
        <el-table-column prop="tag3" label="tag3"></el-table-column>
        <el-table-column prop="tag4" label="tag4"></el-table-column>
        <el-table-column prop="task" label="task进度"></el-table-column>
        <el-table-column prop="comment" label="评论"></el-table-column>
      </el-table>
      <p class="score">
        <span>平均分：</span>
        <span class="ans">{{ score2 }}</span>
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
      status: 0,
      data1: [],
      data2: [],
      score1: 97,
      score2: 95,
    };
  },
  props: {
    id: String,
  },
  mounted() {
    //获取新生的详细信息
    let data = {
      uuid: sessionStorage.getItem("uuid"),
      studentId: this.id,
    };
    api.getDetails(data, this);
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
