const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'src/app.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'app.bundled.js'
  },
  devServer: {
    port: 8082,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
 /*  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, '..', dir),
    }
  }, */
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'vue-style-loader!css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: 'Vue with Webpack',
      favicon: join(__dirname, 'public/favicon.ico'),
      template: join(__dirname, 'public/index.html')
    })
  ]
}
