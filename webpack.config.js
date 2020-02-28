const path = require('path');

module.exports = {
  entry: './src/scripts/app.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
