module.exports = {
  publicPath: "./",
  assetsDir: "assets",
  devServer: {
    port: 8090,
    proxy: {
      "/api": {
        target: "http://hanzoy.club/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
