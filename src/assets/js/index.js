import Form from './Form';
import store from './redux/store';

const $form = document.querySelector('.js-form');
new Form($form, store);
