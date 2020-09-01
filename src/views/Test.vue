<template>
  <div>
    <div class="title">h5与native交互例子</div>
    <div class="title">{{ $t("word") }}</div>
    <van-button @click="getUser" type="primary">button</van-button>
  </div>
</template>
<script>
import { Button } from "vant";
import { READ_MEM_FROM_NATIVE } from "urlScheme";
export default {
  components: {
    [Button.name]: Button
  },
  name: "Test",
  data() {
    return {
      params: {}
    };
  },
  mounted() {
    READ_MEM_FROM_NATIVE({ userId: "", token: "" });
    window.onCallJs = this.onCallJs;
  },
  methods: {
    onCallJs(result) {
      // {
      //   params: {},
      //   action: '',
      //   type: ''
      // }
      console.log(result);
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
}
</style>
