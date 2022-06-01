import { Module, ModuleTree } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutation';
import { getters } from './getters';
import { DasboardList, RootState } from './types';

export const state: DasboardList = {
  calendarEvents: [
    {
      color: 'Blue',
      start: '2022-05-20 15:10',
      end: '2022-05-21 16:20',
      name: 'Meeting',
      timed: 'true',
    },
    {
      color: 'blue',
      start: '2022-05-31 15:10',
      end: '2022-06-01 16:20',
      name: 'Meeting',
      timed: 'true',
    },
    {
      color: 'indigo',
      start: '2022-06-01 15:10',
      end: '2022-06-02 16:20',
      name: 'FFFF',
      timed: 'true',
    },
    {
      color: 'orange',
      start: '2022-06-5 15:10',
      end: '2022-06-7 16:20',
      name: 'Meeting',
      timed: 'true',
    },
    {
      color: 'indigo',
      start: '2022-06-01',
      end: '2022-06-03 16:20',
      name: 'A',
      timed: 'true',
    },
  ],
};

const namespaced: boolean = true;

export const dashboard: Module<DasboardList, ModuleTree<RootState>> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
