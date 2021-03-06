const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    watch: true,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ],
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: '/node_modules/'
        },  {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }, {
          loader: "file-loader",
          test: /\.jpe?g$|\.png$|\.gif$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$|.\mp4$/
        }
      ]
    },
    devServer: {
      port: 5000,
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
      }
}
