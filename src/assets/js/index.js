import store from './redux/store';
import { increment, decrement } from './redux/reducer/counter';

store.subscribe(() => {
  console.log(store.getState());
  const { counter } = store.getState();
  document.querySelector('.js-count').textContent = counter.count;
});

document.querySelector('.js-increment').addEventListener('click', () => {
  store.dispatch(increment());
});
