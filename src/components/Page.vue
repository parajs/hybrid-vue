<template>
  <div>
    <div ref="header" class="wrapper-header" v-if="$slots.header">
      <div class="safe-area-inset-top"></div>
      <slot name="header"></slot>
    </div>
    <div
      class="main-container"
      :style="{ bottom: footerh + 'px', top: headerh + 'px' }"
    >
      <slot></slot>
    </div>
    <div ref="footer" v-if="$slots.footer" class="wrapper-footer">
      <slot name="footer"></slot>
      <div class="safe-area-inset-bottom"></div>
    </div>
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
    this.init();
    window.addEventListener("resize", this.init());
  },
  destroyed() {
    window.removeEventListener("resize", this.init());
  },
  methods: {
    init() {
      const refHeader = this.$refs.header;
      const refFooter = this.$refs.footer;
      if (refHeader) {
        this.headerh = refHeader.offsetHeight;
      }

      if (refFooter) {
        this.footerH = refFooter.offsetHeight;
      }
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

.wrapper-header {
  position: absolute; // 不用fixed原因，在ios上各种问题，表单场景
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  // background: var(--navbar-color, #005eb5);
}

.main-container {
  position: absolute;
  z-index: 1;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.wrapper-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 200;
}

.wrapper-header /deep/ .van-nav-bar__left {
  padding-right: 24px;
}
.wrapper-header /deep/ .van-nav-bar__left i {
  font-size: 20px;
}
.wrapper-header /deep/ .van-nav-bar__right {
  padding-right: 24px;
}

.wrapper-header /deep/ .van-nav-bar__right i {
  font-size: 20px;
}
</style>
