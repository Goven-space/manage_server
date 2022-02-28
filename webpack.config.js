const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackplugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

let target = 'web';
//告知 webpack 为目标(target)指定一个环境。默认值为 "browserslist"，如果没有找到 browserslist 的配置，则默认为 "web"

module.exports = {
  mode: 'production',
  target: target,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    filename: '[name].bundle.js',
    clean: true, //每次打包前清空目录 旧版用CleanWebpackPlugin插件
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/, // 排除node_modules文件
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024, //小于这个大小的图片将使用内敛的方式，不会打包出文件 默认是 8 * 1024
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }), //打包生成新的html文件,
    new ReactRefreshWebpackplugin(),
  ],
  devServer: {
    port: 3000, //运行端口号
    open: true, //运行后自动打开
    hot: true,
    compress: true, //启动gzip压缩
    client: {
      progress: true, //浏览器打印进度
    },
    
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // performance: {
  //   hints: false,
  // },
};
