import Counter from './Counter';

import store from './redux/store';

// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
//   const { counter } = store.getState();
//   document.querySelector('.js-count').textContent = counter.count;
// });
//
// document.querySelector('.js-increment').addEventListener('click', () => {
//   store.dispatch(increment());
// });

new Counter(document.querySelector('.js-counter'), { store, usageState: ['counter'] });
