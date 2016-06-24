
var webpack           = require('webpack');
var CleanPlugin       = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/app',

  entry: {
    main: ['./main.js']
  },

  output: {
    path: './dist',
    filename: 'main-[hash].js'
  },

  module: {
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015', 'angular2'] } },
      { test: /\.less/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.woff2?(.*)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.(ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.png|\.jpg|\.gif|images\/\.svg$/, loader: 'file?name=[path][name].[ext]' }
    ]
  },

  plugins: [
    new CleanPlugin(['dist']),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    // new webpack.DefinePlugin({
    //   DEBUG: JSON.stringify(process.env.DEBUG || false)
    // }),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      favicon: '../public/favicon.ico',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    colors: true,
    hot: true
  }
};
