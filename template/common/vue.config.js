const path = require('path')
const UploadCdn = require('@hupo/compile-upload-oss-cdn').default
const resolve = dir => path.join(__dirname, dir)
const qa = true
module.exports = {
  transpileDependencies: ['@hupo'],
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugin('UploadCdn').use(new UploadCdn({
        dir: 'static/img/',
        qa
      }))
    } else {
      // 为开发环境修改配置...
    }
    config.module.rule('images').use('url-loader')
      .loader('url-loader').tap(options => {
        options.limit = 100
        return options
      })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/common/api'))
      .set('@core', resolve('src/core'))
      .set('@mixin', resolve('src/core/mixins'))
      .set('@common', resolve('src/common'))
      .set('@components', resolve('src/components'))
      .set('@images', resolve('src/assets/images'))
  }
}
