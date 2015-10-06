var webpack = require("webpack"),
    fs = require('fs'),
    pkg = JSON.parse(fs.readFileSync('./package.json'));

module.exports = {
  context: __dirname,
  entry: "./src/js/" + pkg.name + ".coffee",
  output: {
    path: __dirname + "/dist",
    filename: pkg.name + ".min.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee?literate" },
      { test: /\.(gif|png)$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  devtool: '#sourcemap',
  externals: {
    "jquery": "jQuery",
    "window": "window"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    })
  ]
};
