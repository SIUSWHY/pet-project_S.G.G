import getLogs from '@/API/getLogs';
import { ActionTree } from 'vuex';
import { GET_LOGS } from './mutationTypes';
import { RootState, ProfileData } from './types';

export const actions: ActionTree<ProfileData, RootState> = {
  async loadLogs({ commit }) {
    const { data: logs } = await getLogs();
    commit(GET_LOGS, logs);
  },
};
