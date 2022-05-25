import { MutationTree } from 'vuex';
import { GET_USERS, SET_SELECTED } from './mutationTypes';
import { UsersList, UserType } from './types';

export const mutations: MutationTree<UsersList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  [SET_SELECTED](state, selected) {
    state.selected = selected;
  },
};
