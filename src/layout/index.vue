<template>
  <div class="layout" :style="{ height: `calc(100vh - ${bottomNavH}px)` }">
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
  mounted() {
    this.init();
    window.addEventListener("resize", this.init());
  },
  destroyed() {
    window.removeEventListener("resize", this.init());
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
  position: relative;
}
</style>
