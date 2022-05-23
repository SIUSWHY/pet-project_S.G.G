import { MutationTree } from 'vuex';
import { UsersList, UserType } from './types';

export const mutations: MutationTree<UsersList> = {
  getUsers(state, users: UserType[]) {
    state.users = users;
  },
};
