<template>
  <div class="layout">
    <keep-alive>
      <router-view v-if="$route.meta && $route.meta.keepAlive"> </router-view>
    </keep-alive>
    <router-view v-if="!($route.meta && $route.meta.keepAlive)"> </router-view>
    <BottomNav ref="bottomNav" />
  </div>
</template>

<script>
import BottomNav from "components/BottomNav";
export default {
  name: "Layout",
  components: {
    BottomNav
  },
  data() {
    return {
      bottomNavH: 50
    };
  },
  methods: {
    init() {
      const bottomNav = this.$refs.bottomNav;
      if (bottomNav) {
        this.bottomNavH = bottomNav.offsetHeight;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  height: calc(100vh - 50px);
  position: relative;
  box-sizing: border-box;
}
</style>
