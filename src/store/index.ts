import Vue from 'vue';
import Vuex from 'vuex';
import { usersList } from '@/components/Dashboard/Component/Users/store/index';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    usersList,
  },
});
