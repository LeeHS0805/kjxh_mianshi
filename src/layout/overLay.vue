<template>
  <div id="overLay">
    <transition name="a">
      <div class="overLayWarp" v-if="this.$store.state.overLayShow">
        <Spin size="large" fix>
          <i class="el-icon-loading"></i>
        </Spin>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "overLay",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#overLay {
  .overLayWarp {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a-enter-active {
    animation: fadeIn;
    animation-duration: 0.75s;
  }
  .a-leave-active {
    animation: fadeOut;
    animation-duration: 0.75s;
  }
}
</style>
