# vant-vue-template

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles、mock and hot-reloads for development

```
yarn serve:mock
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### 生成日志添加暂存区及提交版本库

```
yarn cz
```

### 生成日志

```
yarn log
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### H5 与 native 交互

https://www.jianshu.com/p/5bda177acc6c

H5 与 native 的数据交互

1、h5 页面发起一个自定义 URL Scheme 协议请求（相关 action 及参数），native 拦截这个请求后，再由 native 调用 h5 中定义函数同时把 action 及处理结果通过回调函数参数方式传入。

```js
const url = 'vant://xxx?params={"userId": "", token:""}';
window.location.href = url;
window.onCallJs = function(result) {};
```

2、H5 调用 native 方式

- 2.1 h5 页面发起一个自定义 URL Scheme 协议请求（相关 action 及参数）

```js
const url = "vant://xxx";
window.location.href = url;
```

- 2.2 由 native 向 h5 注入一个全局 js 方法，然后在 h5 直接访问这个方法

```js
window.onCallJs(params);
```

3、native 调用 h5 方式
在 h5 中曝露一些全局对象（包括方法），然后在原生 native 中调用这些对象。

### 中文简体（zh-CN） | 中文繁体(zh-TW) | 英语(en-US) 国际化

vue-i118n 库提供国际化支持

### Features

- vant 库用是 less 预处理器，所以项目里优先推荐也用 less，保持一致，devDependencies 依赖里 scss 相关库,所以也支持 scss
- 支持 mock 数据
- 支持 vconsole 功能，开发环境默认开起调试功能
- 支持国际化功能
- 支持 vue 代码书写规范提示及美化
- 支持不同部署环境不同配置
- 支持引入 svg 图标
- 定义一套 native 与 h5 交互规范
- [支持 Git commit 规范](https://developer.aliyun.com/mirror/npm/package/vue-cli-plugin-commitlint)
  - 自动检测 commit 是否规范，不规范不允许提交
  - 自动提示 commit 填写格式。不怕忘记规范怎么写
  - 集成 git add . && git commit 不需要在执行两个命令
  - 自动生成 changelog
