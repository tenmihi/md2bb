const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname + '/src',
  entry: ['./js/md2bb.js'],
  target: 'node',
  output: {
    path: __dirname,
    filename: "./index.js",
    library: 'md2steam-bbcode',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      /*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        query: {
          configFile: './.eslintrc.json'
        },
      }
      */
    ]
  },
  externals: [
    nodeExternals()
  ]
}
