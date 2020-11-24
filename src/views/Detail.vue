<template>
  <page>
    <template #header>
      <van-nav-bar
        left-text="返回"
        @click-left="$router.back()"
        left-arrow
        :title="$t('detail-title')"
      />
    </template>
    <div class="text-center mt-5">列表详情{{ $route.params.id }}</div>
  </page>
</template>
<script>
export default {
  name: "Detail"
};
</script>
