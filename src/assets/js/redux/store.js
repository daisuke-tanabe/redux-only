import { createStore, combineReducers } from 'redux';
import form from './reducer/form';


const reducer = combineReducers({
  form
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
