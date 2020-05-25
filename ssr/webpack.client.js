const path = require("path");
//const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const config = require("./webpack.base");
const defaultConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "react_bundles.js",
    path: path.resolve(__dirname, "react")
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              },
              localsConvention: "camelCase"
            }
          }
        ],

        exclude: /node_modules/
      }
    ]
  }
};
module.exports = merge(config, defaultConfig);
