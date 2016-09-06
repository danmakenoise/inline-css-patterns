/* eslint-disable */
module.exports = {
  entry: './lib/index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#source-map'
}
