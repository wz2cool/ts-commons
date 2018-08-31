const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    "index.min": "./src/index.ts"
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
        loaders: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
