import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { ProfileData, RootState } from './types';

export const state: ProfileData = {
  logs: [],
};

const namespaced: boolean = true;

export const profiledata: Module<ProfileData, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
