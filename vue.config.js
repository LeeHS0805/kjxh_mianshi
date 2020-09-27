module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://192.168.115.48:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
