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
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: { url: false }
            }
          ]
        }
      ]
    }
  }