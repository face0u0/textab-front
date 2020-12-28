const path = require("path")

module.exports = {
    mode: "development",
    entry: {
      index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map'
  }