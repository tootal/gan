module.exports = {
  publicPath: process.env.VUE_APP_ROUTER_MODE === 'hash'
    ? ''
    : '/',
  pages: {
    index: 'src/main.js',
    404: 'src/main.js',
  },
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
  chainWebpack: config => {
    // Text Loader
    config.module
      .rule('text')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
  }
}