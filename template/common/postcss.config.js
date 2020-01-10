module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    <% if(options.template === 'mall') { %>
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
    <% } %>
  ]
}
