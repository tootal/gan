module.exports = {
  publicPath: process.env.VUE_APP_ROUTER_MODE === 'hash'
    ? ''
    : '/',
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
}