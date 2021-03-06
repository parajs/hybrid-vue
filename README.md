# hybrid-vue

该项目基于 vant-ui 框架，解决移动端开发和混合开发遇到常见问题，例如：mock 数据、h5 与 native 通信、h5 调试、适配、国际化等问题

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles、mock service and hot-reloads for development

```
yarn serve:mock
```

### Compiles、request to go native and hot-reloads for development

```
yarn serve:app
```

### 构建 hybrid 生产版本

```
yarn build:app
```

### 构建 h5 生产版本

```
yarn build
```


### 构建 hybrid 测试版本

```
yarn staging:app
```
### 构建 h5 测试版本

```
yarn staging
```

### 生成 hybrid 生产版依赖分析

```
yarn report:app
```
### 构建 h5 生产版依赖分析

```
yarn report
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

### Project Structure

```
├── docs                       # 项目文档
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
|   ├── mock                   # 项目mock 模拟数据
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── locales                # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
|   ├── url                    # h5通过native发送请求
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── i18n.js                # vue-i18n国际化整合
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .browserslistrc            # browserslist 配置项
├── .babel.config.js           # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── jest.config.js             # jest 配置
├── CHANGELOG.md               # 更新日志
├── .gitignore                 # git忽略文件
├── commitlint.config.js       # commitlint配置
└── package.json               # package.json

```

### H5 与 native 交互知多少

https://www.jianshu.com/p/5bda177acc6c
https://segmentfault.com/a/1190000010356403

### 中文简体（zh-CN） | 中文繁体(zh-TW) | 英语(en-US) 国际化

vue-i118n 库提供国际化支持

### Features

- 支持一键切换调试，h5 与 api 服务调试、h5 与 native 调试
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


