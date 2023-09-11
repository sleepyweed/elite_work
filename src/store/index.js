import Vue from 'vue'
import Vuex from 'vuex'

import homework from './homework.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homework
  }
})
