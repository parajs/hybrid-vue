<template>
  <div class="page">
    <header
      ref="header"
      class="page-header safe-area-inset-top"
      v-if="$slots.header"
    >
      <slot name="header"></slot>
    </header>
    <div v-if="$slots.header" :style="{ height: headerh + 'px' }"></div>
    <div ref="body" class="page-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :style="{ height: footerh + 'px' }"></div>
    <footer
      ref="footer"
      v-if="$slots.footer"
      class="page-footer safe-area-inset-bottom"
    >
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Page",
  data() {
    return {
      headerh: 0,
      footerh: 0
    };
  },
  mounted() {
    this.initPageLayout();
    window.addEventListener("resize", this.initPageLayout());
  },
  destroyed() {
    window.removeEventListener("resize", this.initPageLayout());
  },
  methods: {
    initPageLayout() {
      // 确保等待 DOM 更新时，获取正确值
      this.$nextTick(function() {
        const refHeader = this.$refs.header;
        const refFooter = this.$refs.footer;
        if (refHeader) {
          this.headerh = refHeader.offsetHeight;
        }

        if (refFooter) {
          this.footerh = refFooter.offsetHeight;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.safe-area-inset-top {
  /* Status bar height on iOS 11.0 */
  padding-top: constant(safe-area-inset-top);
  /* Status bar height on iOS 11+ */
  padding-top: calc(env(safe-area-inset-top) * 1);
}

.safe-area-inset-bottom {
  /* Status bar height on iOS 11.0 */
  padding-bottom: constant(safe-area-inset-bottom);
  /* Status bar height on iOS 11+ */
  padding-bottom: calc(env(safe-area-inset-bottom) * 1);
}
.page-header {
  position: fixed; // 在ios上表单场景，fixed定位有闪烁问题
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
}

.page-body {
  position: relative;
  width: 100%;
}
.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 200;
}

.page-header /deep/ .van-nav-bar__left {
  padding-right: 24px;
}
.page-header /deep/ .van-nav-bar__left i {
  font-size: 20px;
}
.page-header /deep/ .van-nav-bar__right {
  padding-right: 24px;
}

.page-header /deep/ .van-nav-bar__right i {
  font-size: 20px;
}
</style>
