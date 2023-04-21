import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    product: {}
  },
  getters: {
    product: state => {
      return state.product;
  }
  },
  mutations: {
    SET_Product (state, product) {
      state.product = product
  }
  },
  actions: {
    loadProduct({ commit }) {
      axios
          .get('api.json')
          .then(response => response.data)
          .then(product => {
              console.log(product);
          commit('SET_Product', product)
      })
  }
  },
  modules: {
  }
})
