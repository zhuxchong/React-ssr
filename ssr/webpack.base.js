module.exports = {
  // plugins: ["@babel/plugin-transform-runtime"],
  resolve: {
    extensions: [".js", ".jsx"] //表示这几种文件的后缀名可以省略，按照从前到后的方式来进行补全
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
