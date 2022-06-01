import { MutationTree } from 'vuex';
import { GET_EVENTS, SET_NEW_EVENT } from './mutationTypes';
import { DasboardList, EventType } from './types';

export const mutations: MutationTree<DasboardList> = {
  [GET_EVENTS](state, events: EventType[]) {
    state.calendarEvents = events;
  },
  [SET_NEW_EVENT](state, eventData) {
    state.calendarEvents.push(eventData);
  },
};
