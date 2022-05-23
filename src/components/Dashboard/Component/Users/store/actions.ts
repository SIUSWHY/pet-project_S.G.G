import getUsers from '@/API/getUsers';
import { ActionTree } from 'vuex';
import { RootState, UsersList } from './types';

export const actions: ActionTree<UsersList, RootState> = {
  async loadData({ commit }) {
    const { data: users } = await getUsers();
    commit('getUsers', users);
  },
};
