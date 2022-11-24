import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../types';

const persistState = JSON.parse(localStorage.getItem('reactTodos'));

const initialState = {
  todos: persistState || [],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      const newTodo = {
        id: `react-${Date.now()}`,
        title: payload.title,
        descr: payload.descr,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((obj) => obj.id !== payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((obj) => {
          if (obj.id === payload.id) {
            return {
              ...obj,
              title: payload.title,
              descr: payload.descr,
            };
          }

          return obj;
        }),
      };

    case TOGGLE_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((obj) => {
          if (obj.id === payload) {
            return { ...obj, completed: !obj.completed };
          }

          return obj;
        }),
      };

    default:
      return state;
  }
};
