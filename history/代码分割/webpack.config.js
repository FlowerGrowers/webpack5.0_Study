const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin2');
// 3种常用代码分离方式
// 1.【入口起点】 使用entry 配置手动的分离代码
// -- // 但是由于多个文件都引入了第三方或者相同的模块代码 这种方法不够灵活 而且不能够将核心应用程序逻辑进行动态拆分
// 2.【防止重复】 使用CommonsChunkPlugin 去重和分离chunk(错的 老版本的webpack)
// -- // 新版本的建议是 加入依赖 和 分割chunk插件
// If we're going to use multiple entry points on a single HTML page, optimization.runtimeChunk: 'single' is needed too, otherwise we could get into trouble described here.
// 3.【动态导入】 通过模块的内联函数来调用分离代码

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'lodash',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'lodash',
    // },
    // lodash: 'lodash',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      title: 'code Splitting',
    }),
    new MiniCssExtractPlugin({
      filename: 'ok.css',
    }),
    new Visualizer({
      filename: path.join('..', 'stats', 'statistics.html'),
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
