<template>
  <div>
    <div class="title">h5与native交互例子</div>
    <div class="title">{{ $t("word") }}</div>
    <van-button @click="getUser" type="primary">button</van-button>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  name: "Test",
  mounted() {
    console.log(this);
    window.onCallJs = function(json) {
      alert(json);
    };
    window.location.href =
      'mobxybank://NATIVE_SERVICE_DATA_SERVICE/READ_MEM_FROM_NATIVE/?params={"userId": "", token:""}&&callback=findUser';
  },
  methods: {
    getUser() {
      // https://baidu.com
      window.onCallJs(function(json) {
        alert(json);
      });

      //   window.onCallJs.findUser(function(json){

      //   })
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
