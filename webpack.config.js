const path = require('path')

module.exports = {
  cache: true,
  entry: 'md2bb.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: "./index.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: [ '.js', ],
    modules: [
      path.resolve(__dirname, 'src/js'),
      'node_modules',
    ],
    descriptionFiles: ['package.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  stats: "detailed",
}
