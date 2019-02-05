import { createStore, combineReducers } from 'redux';
import form from './reducer/form';

const reducer = combineReducers({
  form
});

const store = createStore(reducer);

export default store;
