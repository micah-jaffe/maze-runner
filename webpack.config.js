const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};