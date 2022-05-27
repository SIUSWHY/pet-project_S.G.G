import getUsers from '@/API/getUsers';
import { ActionTree } from 'vuex';
import { RootState, UsersList } from './types';
import { GET_USERS, SET_NEW_USER, SET_SELECTED, SET_USERS_WITHOUT_DELETED } from './mutationTypes';

export const actions: ActionTree<UsersList, RootState> = {
  async loadData({ commit }) {
    const { data: users } = await getUsers();
    commit(GET_USERS, users);
  },
  pushSelected({ commit, state }, selected: Array<any>) {
    commit(SET_SELECTED, selected);
  },
  pushUsersWithoutDeleted({ commit, state }, usersId) {
    commit(SET_USERS_WITHOUT_DELETED, usersId);
  },
  pushNewUser({ commit }, user) {
    commit(SET_NEW_USER, user);
  },
};
