import Vue from 'vue'
import App from './App'
<% if (options.features.indexOf('vuex') !== -1) { %>
// vuex
import store from './store/index'
<% } %>

<% if (options.features.indexOf('hupoUI') !== -1) { %>
// @hupo/ui
import mixins from '@hupo/ui/core/mixins/index'
mixins.forEach(item => {
  Vue.mixin(item)
})
<% } %>

Vue.config.productionTip = false

const app = new Vue({
  <% if (options.features.indexOf('vuex') !== -1) { %>
  store,
  <% } %>
  ...App
})
app.$mount()
