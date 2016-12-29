// to install webpack in command line -
// npm install for all node_modules
// npm install -g webpack@1.12.13
// lets you use webpack in terminal.

var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })
  ],
  
  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      applicationStyles: 'app/styles/app.scss',
      jQuery: "node_modules/jquery/dist/jquery.min.js",
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};