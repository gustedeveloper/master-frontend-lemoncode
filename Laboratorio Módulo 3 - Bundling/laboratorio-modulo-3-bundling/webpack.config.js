import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist =>  https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist
      template: "./src/index.html", //Name of template in ./src
      scriptLoading: "blocking", //Just use the blocking approach (no modern defer or module)
      hash: true,
    }),
  ],
  devServer: {
    port: 8080,
  },
};
