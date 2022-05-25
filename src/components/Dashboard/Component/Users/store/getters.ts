import { GetterTree } from 'vuex';
import { RootState, UsersList } from './types';

export const getters: GetterTree<UsersList, RootState> = {
  isDisableTools(state) {
    if (state.selected.length === 0) {
      return true;
    }
    return false;
  },
};
