import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overLayShow: false
  },
  mutations: {
    toggleOverLay(state) {
      state.overLayShow = !state.overLayShow
    }
  },
  actions: {},
  modules: {}
})