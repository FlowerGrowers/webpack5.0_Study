const path = require('path');
// https://github.com/jantimon/html-webpack-plugin | Guess what you want to know more about
const HTMLWebpackPlugin = require('html-webpack-plugin');
// NOTE: 新版清除原来的dist下的文件变得更加简单 https://github.com/johnagan/clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 打包跟踪 https://github.com/shellscape/webpack-manifest-plugin
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'development',
  plugins: [
    // new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    new HTMLWebpackPlugin({
      title: 'Output Management',
      // template: path.resolve('index.html'),
    }),
  ],
};
