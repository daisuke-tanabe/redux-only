import ReduxComponent from './ReduxComponent';
import { increment, decrement } from './redux/reducer/counter';

export default class Counter extends ReduxComponent {
  constructor(root, store) {
    super(root, store);
    this.$result = this.$root.querySelector('.js-result');
    this.$increment = this.$root.querySelector('.js-increment');
    this.$decrement = this.$root.querySelector('.js-decrement');

    this.eventListeners();
    this.render();
  }

  render() {
    this.$result.textContent = this.state.counter.count;
  }

  eventListeners() {
    this.$increment.addEventListener('click', () => this.dispatch(increment()));
    this.$decrement.addEventListener('click', () => this.dispatch(decrement()));
  }
}
