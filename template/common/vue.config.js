const path = require('path')
<% if (options.features.indexOf('compileUploadOssCdn') !== -1) { %>
const UploadCdn = require('@hupo/compile-upload-oss-cdn').default
<% } %>
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
    <% if (options.features.indexOf('compileUploadOssCdn') !== -1) { %>
    // ---------- 图片大小显示 上传cdn
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
    <% } %>
    // ---------- 别名配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@core', resolve('src/core'))
    // ---------- 别名配置
  }
}
