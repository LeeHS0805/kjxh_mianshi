<template>
  <div id="weightChange">
    <header>
      <p>修改权重</p>
      <el-button @click="back">返回</el-button>
    </header>
    <el-divider></el-divider>
    <el-switch
      style="display: block"
      v-model="window1"
      active-color="#13ce66"
      inactive-color="#9400D3"
      active-text="面试一"
      inactive-text="面试二"
    ></el-switch>
    <div class="interview1" v-if="window1">面试一</div>
    <div class="interview2" v-else>面试二</div>
  </div>
</template>

<script>
export default {
  name: "weightChange",
  data() {
    return {
      window1: true,
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
#weightChange {
  header {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 28px;
      font-weight: bold;
    }
  }
  .el-switch {
    width: max-content;
    margin: 20px auto 0 auto;
  }
  .interview1,
  .interview2 {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    outline: 1px solid black;
  }
}
</style>
