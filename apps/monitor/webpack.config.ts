const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/test.ts",
  output: {
    clean: true,
    filename: "SDK.js",
    library: "SDK",
  },

  resolve: {
    extensions: [".ts", ".js", ".cjs", ".json"],
    alias: {
      "@error": path.resolve(__dirname, "./src/core/Error"),
      "@": path.resolve(__dirname, "./src"),
    },
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
      // {
      //   test: require.resolve("./src/index.ts"),
      //   use: ["expose-loader?SDK"],
      // },
    ],
  },

  plugins: [
    new HtmlPlugin({
      inject: "head",
      template: "./index.html",
    }),
  ],

  devServer: {
    port: 3000,
  },
};
