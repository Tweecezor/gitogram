const path = require("path");
const vueSrc = "./src";
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/gitogram/" : "/",
  runtimeCompiler: true,
  css: {
    modules: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),

        _api: path.resolve(__dirname, "src/api/modules")
      },
      extensions: [".js", ".vue", ".json"]
    }
  }
};
