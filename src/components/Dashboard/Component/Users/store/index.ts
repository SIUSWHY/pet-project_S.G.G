import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { RootState, UsersList } from './types';

export const state: UsersList = {
  users: [],
  selectedUsers: [],
};

const namespaced: boolean = true;

export const usersList: Module<UsersList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
