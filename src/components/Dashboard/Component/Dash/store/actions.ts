import { ActionTree } from 'vuex';
import { RootState, DasboardList } from './types';
import { SET_NEW_EVENT, GET_EVENTS } from './mutationTypes';
import getEvents from '@/API/getEvents';

export const actions: ActionTree<DasboardList, RootState> = {
  async loadEvents({ commit }) {
    const { data: events } = await getEvents();
    commit(GET_EVENTS, events);
  },
  pushNewEvent({ commit }, eventData) {
    commit(SET_NEW_EVENT, eventData);
  },
};
