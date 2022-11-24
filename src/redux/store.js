import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem(
    'reactTodos',
    JSON.stringify(store.getState().todo.todos),
  );
});

export default store;
