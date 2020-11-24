<template>
  <van-tabbar :fixed="false" route>
    <van-tabbar-item replace to="/" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="user-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "BottomNav"
};
</script>

<style lang="less" scoped>
.safe-area-inset-bottom {
  /* Status bar height on iOS 11.0 */
  padding-bottom: constant(safe-area-inset-bottom);
  /* Status bar height on iOS 11+ */
  padding-bottom: calc(env(safe-area-inset-bottom) * 1);
}
</style>
