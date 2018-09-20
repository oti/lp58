var config             = require('./gulp-config');
var webpack            = require('webpack');
var path               = require('path');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var PROD               = JSON.parse(process.env.NODE_ENV || '0');
var jsDir              = config.src.jsDir.replace('./', '');

var plugins = [
  // bower.jsonにあるパッケージをrequire出来るように
  new BowerWebpackPlugin(),
  new webpack.ProvidePlugin({
    whatInput: 'what-input'
  }),
  // 常に圧縮
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
];

if (PROD) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  );
}

module.exports = {
  entry: {
    script: ['babel-polyfill', jsDir + '/script.js']
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.json$/, loader: 'json'
      },
      {
        test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
        loader: 'imports?this=>window!exports?window.createjs',
      },
      {
        test: /\.coffee$/, loader: 'coffee-loader'
      },
      {
        test: /\.(css|scss|less)$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: plugins,
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.coffee'], // requireする際に、拡張子を省略するための設定
    alias: {
      'libs': jsDir + '/libs',
      'modules': jsDir + '/modules'
    },
    modulesDirectories: ['node_modules', 'bower_components']
  },
  devtool: 'source-map'
};
