import getUsers from '@/API/getUsers';
import { ActionTree } from 'vuex';
import { RootState, UsersList } from './types';
import { GET_USERS, SET_SELECTED } from './mutationTypes';

export const actions: ActionTree<UsersList, RootState> = {
  async loadData({ commit }) {
    const { data: users } = await getUsers();
    commit(GET_USERS, users);
  },
  pushSelected({ commit, state }, selected: Array<any>) {
    commit(SET_SELECTED, selected);
  },
};
