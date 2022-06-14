import { MutationTree } from 'vuex';
import { GET_EVENTS, SET_EVENTS_WITHOUT_DELETED, SET_NEW_EVENT } from './mutationTypes';
import { DasboardList, EventType } from './types';

export const mutations: MutationTree<DasboardList> = {
  [SET_EVENTS_WITHOUT_DELETED](state, id: any) {
    const filtered = state.calendarEvents.filter(event => !id.includes(event._id));
    state.calendarEvents = filtered;
    console.log(filtered, id);
  },
  [GET_EVENTS](state, events: EventType[]) {
    state.calendarEvents = events;
  },
  [SET_NEW_EVENT](state, eventData) {
    state.calendarEvents.push(eventData);
  },
};
