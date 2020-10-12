<template>
  <page>
    <template #header>
      <van-nav-bar :title="$t('my-title')" />
    </template>
    <van-form @submit="onSubmit" class="mt-5" v-if="!token">
      <van-field
        v-model="username"
        name="username"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div style="margin: 40px;" v-else>
      <van-button round block type="info" @click="logout">
        登出
      </van-button>
    </div>
  </page>
</template>
<script>
import { mapState } from "vuex";
import { Form, Field, Button } from "vant";
export default {
  name: "My",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      user: state => state.user.user
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
    onSubmit(values) {
      this.$store.dispatch("user/login", values).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
