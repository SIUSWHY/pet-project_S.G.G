import { MutationTree } from 'vuex';
import { GET_LOGS } from './mutationTypes';
import { LogType, ProfileData } from './types';

export const mutations: MutationTree<ProfileData> = {
  [GET_LOGS](state, logs: LogType[]) {
    state.logs = logs;
  },
};
