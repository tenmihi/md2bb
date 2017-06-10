module.exports = {
  context: __dirname + '/src',
  entry: ['./js/core.js'],
  output: {
    path: __dirname,
    filename: "./index.js"
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        query: {
          configFile: './.eslintrc.json'
        },
      }
    ]
  }
}
