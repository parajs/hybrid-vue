<template>
  <div class="layout">
    <router-view :key="key" />
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "components/BottomNav";
export default {
  name: "Layout",
  components: {
    BottomNav
  },
  computed: {
    key() {
      return this.$route.fullPath;
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  height: calc(100vh - 96px);
  overflow: auto;
  margin-top: 46px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
