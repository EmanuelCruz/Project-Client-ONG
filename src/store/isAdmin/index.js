import { createStore, combineReducers } from 'redux';
import isAdminReducer from './reducer';

const reducers = combineReducers({
  isAdminReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;