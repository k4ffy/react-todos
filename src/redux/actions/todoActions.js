import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../types';

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const toggleCompletedTodo = (payload) => ({
  type: TOGGLE_COMPLETED_TODO,
  payload,
});
