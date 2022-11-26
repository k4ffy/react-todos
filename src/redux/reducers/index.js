import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { todoReducer } from './todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  app: appReducer,
});

export default rootReducer;
