import Vue from 'vue'
import Vuex from 'vuex'
import tabbar from './tabbar/index'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    tabbar
  }
})
