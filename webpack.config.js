const path = require('path');

module.exports = {
  entry: './src/scripts/app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'dist',
        },
      },
      {
        test: /\.(woff|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'dist',
        }
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};
