const path = require('path');

// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./source/js/combine.js', './source/css/combine.scss'],
  output: {
    filename: './build/combine.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      // perform js babelization on all .js files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['babel-preset-env']
         }
        }
      },
      // compile all .scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: './build/combine.min.css'
    })
  ],
  optimization: {
    minimizer: [
      // enable the js minification plugin
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
