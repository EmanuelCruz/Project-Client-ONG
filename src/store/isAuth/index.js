import { createStore, combineReducers } from 'redux';
import isAuthReducer from './reducer';

const reducers = combineReducers({
  isAuthReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;