// inside webpack config need to use commonjs

// !! process loaders from right to left
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    // prevent caching by name - [contenthash]
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // will be applicable for all, except node_modules folder
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    // minify the bundle (terser is recommended, against uglify)
    new TerserPlugin(),

    // to prevent inject css into bundle (working inline on runtime)
    // plugin EXTRACTS separate css|scss files from components
    // and putting all those css into one separate file in /dist
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', //clean all (include subdirs) inside dist/ folder
        path.join(process.cwd(), 'build/**/*')
      ]
    })
  ]
};
