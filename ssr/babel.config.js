module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["last 2 versions"]
        }
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [["@babel/plugin-transform-runtime"]];

  return {
    presets,
    plugins
  };
};
