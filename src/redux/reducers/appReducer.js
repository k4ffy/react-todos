import { SET_FILTER } from '../types';

export const Filters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = {
  currentFilter: Filters.All,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, currentFilter: action.payload };

    default:
      return state;
  }
};
