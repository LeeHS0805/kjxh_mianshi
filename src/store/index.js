import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    overLayShow: false,
    type:''
  },
  mutations: {
    toggleOverLay(state) {
      state.overLayShow = !state.overLayShow
    },
    changeType(state,type){
      state.type=type
    }
  },
  actions: {},
  modules: {}
})
