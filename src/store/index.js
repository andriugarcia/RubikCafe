import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newSlotOpened: false
  },
  mutations: {
    toogleNewSlotOpened(state) {
      state.newSlotOpened = !state.newSlotOpened
    }
  },
  actions: {
  },
  modules: {
  }
})
