const path = require("path");
//const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const config = require("./webpack.base");
const defaultConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "react_bundles.js",
    path: path.resolve(__dirname, "public")
  }
};
module.exports = merge(config, defaultConfig);
