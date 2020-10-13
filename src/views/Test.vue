<template>
  <page>
    <template #header>
      <van-nav-bar :title="$t('test-title')" />
    </template>
    <div class="title">test</div>
    <template #footer>
      <div>
        footer
      </div>
    </template>
  </page>
</template>
<script>
export default {
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
