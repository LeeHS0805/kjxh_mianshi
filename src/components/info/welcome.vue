<template>
  <div id="welcome">
    <transition name="wel">
      <h1>欢迎</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#welcome {
  height: 100%;
  display: flex;
  justify-content: center;
  h1 {
    margin-top: 50px;
    font-size: 48px;
  }
}
</style>
