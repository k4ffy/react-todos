import { SET_FILTER } from '../types';

const initialState = {
  currentFilter: 'all',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, currentFilter: action.payload };

    default:
      return state;
  }
};
