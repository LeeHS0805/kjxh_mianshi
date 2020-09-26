module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}