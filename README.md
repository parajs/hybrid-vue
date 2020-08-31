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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### H5 与 native 交互

https://www.jianshu.com/p/5bda177acc6c

H5 与 native 的数据交互
1、h5 页面发起一个自定义 URL Scheme 协议请求（相关 action 及参数），native 拦截这个请求后，再由 native 调用 h5 中定义函数同时把处理结果通过回调函数方式传入。

```js
const url = 'vant://xxx/?params={"userId": "", token:""}&&callback=getUser';
window.location.href = url;
window.onCallJs = function(callback, json) {};
```

2、H5 调用 native 方式

- 2.1 h5 页面发起一个自定义 URL Scheme 协议请求（相关 action 及参数）

```js
const url = "vant://xxx"; //action可以是原生页返回，
window.location.href = url;
```

- 2.2 由 native 向 h5 注入一个全局 js 方法，然后在 h5 直接访问这个方法

```js
window.onCallJs(params);
```

3、native 调用 h5 方式
在 h5 中曝露一些全局对象（包括方法），然后在原生 native 中调用这些对象。
