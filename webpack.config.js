let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let webpack = require('webpack');
const tsImportPluginFactory = require('ts-import-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: {
    app: './index.tsx',
    appStyles: './css/site.css',
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: false,
  // productionSourceMap: false,
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory( /** options */) ]
          }),
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  optimization: {
        splitChunks: {
          chunks: 'all'
        }
     },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  // devtool: 'inline-source-map',
  devServer: {
    port: 8084,
    noInfo: true,
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     productionSourceMap: false
    //   }
    // }),
    // new BundleAnalyzerPlugin()
  ],
};