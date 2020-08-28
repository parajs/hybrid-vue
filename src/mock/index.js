// 引入mockjs
import Mock from "mockjs";
import * as user from "./modules/user";
// Mock函数
const { mock } = Mock;

// 设置延时
Mock.setup({
  timeout: 400
});

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);

function mockG() {
  mock("/api/user/findUserList", "get", user.list);
  mock("/api/user/login", "post", user.login);
  mock("/api/user/logout", "post", user.logout);
  mock("/api/user/getUser", "post", user.getUser);
}

mockG();
