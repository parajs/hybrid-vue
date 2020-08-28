<template>
  <div class="home">
    <van-nav-bar title="首页" fixed />
    <div class="mt-5">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "Home",
  components: {
    [Button.name]: Button
  }
};
</script>
