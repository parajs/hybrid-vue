<template>
  <page>
    <template #header>
      <van-nav-bar :title="$t('home-title')" />
    </template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          :to="{ name: 'Detail', params: { id: item.id } }"
          clickable
          class="mt-3"
          v-for="item in list"
          :key="item.id"
          :title="item.content"
        />
      </van-list>
    </van-pull-refresh>
    <template #footer>
      <bottom-nav />
    </template>
  </page>
</template>
<script>
const content = `该项目基于 vant ui 框架，解决移动端开发和混合开发遇到常见问题，
  例如：mock 数据、h5 与 native 通信、h5 调试、适配、国际化等问题`;
export default {
  name: "Home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 15; i++) {
          const id = this.list.length + 1;
          this.list.push({ id: id, content: content + id });
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
