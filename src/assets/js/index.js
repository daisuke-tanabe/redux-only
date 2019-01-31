import Counter from './Counter';
import store from './redux/store';

const $counter = document.querySelector('.js-counter');
new Counter($counter, store);
