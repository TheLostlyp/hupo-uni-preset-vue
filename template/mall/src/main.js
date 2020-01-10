import Vue from 'vue'
import App from './App'
import store from './store/index'
import mixins from '@hupo/ui/core/mixins/index'
import commonMixins from '@core/mixins/common/index'

Vue.config.productionTip = false


import hPage from '@hupo/ui/components/h-page/h-page.vue'
import hNavbar from '@hupo/ui/components/h-navbar/h-navbar.vue'
import hScroll from '@hupo/ui/components/h-scroll/h-scroll.vue'
import hTabbar from '@hupo/ui/components/h-tabbar/h-tabbar.vue'
Vue.component('h-page', hPage)
Vue.component('h-navbar', hNavbar)
Vue.component('h-scroll', hScroll)
Vue.component('h-tabbar', hTabbar)

mixins.forEach(item => {
  Vue.mixin(item)
})
commonMixins.forEach(item => {
  Vue.mixin(item)
})
const app = new Vue({
  store,
  ...App
})
app.$mount()