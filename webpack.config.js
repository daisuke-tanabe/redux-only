const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// 開発モード
const devMode = process.env.NODE_ENV === 'development';

// ディレクトリ変数
const srcDir = path.join(__dirname, 'src');
const buildDir = path.join(__dirname, 'build');

// Jsエントリー
const entry = glob.sync('./src/assets/**/*.js', {
  ignore: './src/assets/js/common/*'
}).reduce((previous, current) => {
  const keyReplace = current.replace(/^\.\/src\//, '');
  previous[keyReplace] = [current.replace(/\/src/, '')];
  return previous;
}, {});

module.exports = {
  mode: process.env.NODE_ENV,

  context: srcDir,

  output: {
    path: buildDir,
    filename: '[name]'
  },

  devServer: {
    contentBase: 'www',
    port: 8888
  },

  devtool: devMode ? 'source-map' : false,

  entry,

  module: {
    rules: [

      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'source:srcset']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              // pugのルートパスを「src」に指定して、pugからは「/assets」でincludeできるようにした
              basedir: srcDir
            }
          }
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    ...glob.sync('./src/pages/**/*.pug').map(path => {
      return new HtmlWebpackPlugin({
        filename: path.replace(/^\.\/src\/pages\//, '').replace(/\.pug$/, '.html'),
        template: path.replace(/^\.\/src\//, ''),
        inject: false
      });
    }),

    new ExtractTextWebpackPlugin('[name]')
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
