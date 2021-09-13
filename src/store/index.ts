import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer:false,
  },
  mutations: {
    toogle_drawer(state, value?: boolean){
      state.drawer = (value == undefined ? !state.drawer : value);
    },
  },
  actions: {
    toogle_drawer (context, value?: boolean) {
      context.commit('toogle_drawer', value)
    },
  },
  modules: {},
});
