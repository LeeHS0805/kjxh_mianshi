<template>
  <div id="app">
    <overLay></overLay>
    <router-view></router-view>
  </div>
</template>
<script>
import overLay from "@/layout/overLay.vue";
export default {
  name: "app",
  components: {
    overLay,
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
</style>
