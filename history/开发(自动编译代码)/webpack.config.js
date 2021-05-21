const path = require('path');
// https://github.com/jantimon/html-webpack-plugin | Guess what you want to know more about
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 每次编译重新build 这会闲的非常麻烦
// 1. watch:true // 确定就是要看到效果每次都要重新刷新
// 2. webpack-dev-server // yarn add webpack-dev-server -D
// NOTE: "start": "webpack serve --open" 中文文档还是没有跟新
// 3. webpack-dev-middleware

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/',
  },
  mode: 'development',
  plugins: [
    // new WebpackManifestPlugin(),
    new HTMLWebpackPlugin({
      title: 'Development',
    }),
  ],
  devtool: 'inline-source-map',
  // watch: true,
  devServer: {
    contentBase: './dist',
  },
};
