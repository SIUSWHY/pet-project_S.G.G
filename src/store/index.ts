import Vue from 'vue';
import Vuex from 'vuex';
import { usersList } from '@/components/Dashboard/Component/Users/store/index';
import { dashboard } from '@/components/Dashboard/Component/Dash/store/index';
import { profiledata } from '@/components/Dashboard/Component/Profile/store/index';

Vue.use(Vuex);

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    usersList,
    dashboard,
    profiledata,
  },
});
