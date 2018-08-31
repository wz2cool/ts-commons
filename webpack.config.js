const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  mode: "production",
  entry: {
    "ts-commons": "./src/index.ts",
    "ts-commons.min": "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "ts-commons",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        include: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "awesome-typescript-loader"],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;