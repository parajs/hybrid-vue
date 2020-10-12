<template>
  <page>
    <template #header>
      <van-nav-bar :title="$t('test-title')" />
    </template>
    <div class="title">test</div>
  </page>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  name: "Test"
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
}
</style>
