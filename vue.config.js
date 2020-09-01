const path = require("path");
const name = process.env.VUE_APP_TITLE;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,

  devServer: {
    open: true,
    port: 3000,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:3000`,
        changeOrigin: true,
        // logLevel: 'debug',
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },

  productionSourceMap: false,

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        layout: resolve("src/layout"),
        views: resolve("src/views"),
        utils: resolve("src/utils"),
        router: resolve("src/router"),
        components: resolve("src/components"),
        icons: resolve("src/icons"),
        api: resolve("src/api"),
        assets: resolve("src/assets"),
        store: resolve("src/store"),
        mock: resolve("src/mock")
      }
    }
  },

  chainWebpack(config) {
    config.plugins.delete("preload"); // delete preload plugin
    config.plugins.delete("prefetch"); // delete prefetch plugin

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },

  pluginOptions: {
    i18n: {
      locale: "zh-CN",
      fallbackLocale: "zh-CN",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
