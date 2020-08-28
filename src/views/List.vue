<template>
  <div>
    <top-nav>
      list
    </top-nav>
    <mu-container ref="container">
      <mu-load-more
        @refresh="refresh"
        :refreshing="refreshing"
        :loading="loading"
        @load="load"
      >
        <mu-list>
          <template v-for="i in num">
            <mu-list-item :key="i + num">
              <mu-list-item-title>{{ text }} Item {{ i }}</mu-list-item-title>
            </mu-list-item>
            <mu-divider :key="i" />
          </template>
        </mu-list>
      </mu-load-more>
    </mu-container>
  </div>
</template>
<script>
import { findUserList } from "api/user";
export default {
  name: "List",
  data() {
    return {
      num: 20,
      refreshing: false,
      loading: false,
      text: "List"
    };
  },
  mounted() {
    this.findUserList();
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === "List" ? "Menu" : "List";
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    },
    async findUserList() {
      const list = await findUserList();
      console.log(list);
    }
  }
};
</script>
