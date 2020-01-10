import Vue from 'vue'
import App from './App'
import commonMixins from '@core/mixins/common/index'

Vue.config.productionTip = false

commonMixins.forEach(item => {
  Vue.mixin(item)
})
const app = new Vue({
  ...App
})
app.$mount()