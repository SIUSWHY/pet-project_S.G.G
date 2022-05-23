import usersStore from '@/components/Dashboard/Component/Users/store';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: usersStore,
  },
});

export default store;
