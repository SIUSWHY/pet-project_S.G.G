import Vue from 'vue';
import Vuex from 'vuex';
import getUsers from '@/API/getUsers';

const SET_USERS = 'SET_USERS';

//VueX store
const store = {
  namespaced: true,
  state: {
    users: [],
  },
  actions: {
    async loadData({ commit }) {
      const { data: usersList } = await getUsers();
      commit(SET_USERS, usersList);
    },
  },
  mutations: {
    [SET_USERS](state, usersList) {
      state.users = usersList;
    },
  },
};
console.log(store.state.users);

export default store;
