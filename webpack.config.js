const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 5001,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //   {
      //     test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
      //     type: "asset/resource",
      //   },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // Output filename pattern
              outputPath: "images", // Output directory for images
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // Output filename pattern
              outputPath: "files", // Output directory for images
            },
          },
        ],
      },
      // {
      //   test: /\.(eot|svg|ttf|woff2|woff?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "",
      //     },
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "temp.html"),
    }),
  ],
};
