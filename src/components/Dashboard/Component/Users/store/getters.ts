import { GetterTree } from 'vuex';
import { RootState, UsersList } from './types';

export const getters: GetterTree<UsersList, RootState> = {
  isDisableTools(state) {
    if (state.selected.length === 0) {
      return { deleteTool: true, additTool: true };
    }
    if (state.selected.length === 1) {
      return { deleteTool: false, additTool: false };
    }
    return { deleteTool: false, additTool: true };
  },
  selectedUsersById(state) {
    let selectedId: string[] = [];
    state.selected.map(value => selectedId.push(value._id));
    return selectedId;
  },
};
