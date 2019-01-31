import { createStore, combineReducers } from 'redux';
import counter from './reducer/counter';

const reducer = combineReducers({
  counter
});

const store = createStore(reducer);

export default store;
