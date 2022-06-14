import { MutationTree } from 'vuex';
import { GET_USERS, SET_NEW_USER, SET_SELECTED, SET_USERS_WITHOUT_DELETED } from './mutationTypes';
import { UsersList, UserType } from './types';

export const mutations: MutationTree<UsersList> = {
  [GET_USERS](state, users: UserType[]) {
    state.users = users;
  },
  [SET_SELECTED](state, selected) {
    state.selectedUsers = selected;
  },
  [SET_USERS_WITHOUT_DELETED](state, usersId: Array<string>) {
    const filtered = state.users.filter(user => !usersId.includes(user._id));
    state.users = filtered;
    state.selectedUsers = [];
  },
  [SET_NEW_USER](state, user) {
    state.users.push(user.data);
  },
};
