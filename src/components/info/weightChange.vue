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

    <div class="interview1" v-if="window1">
      <div class="warp">
        <span>权值一</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect1"
        ></el-input>
      </div>
      <div class="warp">
        <span>权值二</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect2"
        ></el-input>
      </div>
      <div class="warp">
        <span>权值三</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect3"
        ></el-input>
      </div>
      <div class="warp">
        <span>权值四</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect4"
        ></el-input>
      </div>
    </div>

    <div class="interview2" v-else>
      <div class="warp">
        <span>权值一</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect1"
        ></el-input>
      </div>
      <div class="warp">
        <span>权值二</span
        ><el-input
          placeholder="修改权值"
          v-model="weightData.aspect2"
        ></el-input>
      </div>
    </div>

    <el-button class="send" @click="send">发送修改</el-button>
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  name: "weightChange",
  data() {
    return {
      window1: true,
      weightData: {
        aspect1: "",
        aspect2: "",
        aspect3: "",
        aspect4: "",
      },
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    //发送修改
    send() {
      //生成数据
      let data = "";
      if (this.window1) {
        data = {
          uuid: "",
          interview: 1,
          aspect1: this.weightData.aspect1,
          aspect2: this.weightData.aspect2,
          aspect3: this.weightData.aspect3,
          aspect4: this.weightData.aspect4,
        };
      } else {
        data = {
          uuid: "",
          interview: 2,
          aspect1: this.weightData.aspect1,
          aspect2: this.weightData.aspect2,
        };
      }
      //发送
      infoApi.changeWeight(data, this);
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
    .warp {
      margin: 10px auto 0 auto;
      width: 80%;
      max-width: 600px;
      min-width: 300px;
      display: flex;
      span {
        width: 30%;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .send {
    display: block;
    margin: 30px auto 0 auto;
  }
}
</style>
