import { createStore } from 'redux';
import Form from './Form';
import reducer from './redux/reducer';

const $form = document.querySelector('.js-form');

// どうしても動的にstateを作りたいのでcreateStoreする時に該当reducerへ渡す
const store = createStore(
  reducer,
  {
    form: Form.initializeState($form)
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

new Form(document.querySelector('.js-form'), store);
