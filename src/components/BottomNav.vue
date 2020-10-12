<template>
  <van-tabbar route class="afe-area-inset-bottom">
    <van-tabbar-item replace to="/" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="user-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "BottomNav",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
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
