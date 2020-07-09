import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[]
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    },
    setIndex(state,value){
      state.index = value
    }
  },
  actions: {
  },
  modules: {
  }
})
