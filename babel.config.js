const plugins = [];
if (process.env._REMOVE_CONSOLE) {
  plugins.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "vant",
  //       libraryDirectory: "es",
  //       style: name => `${name}/style/less`
  //     },
  //     "vant"
  //   ]
  // ]
};
