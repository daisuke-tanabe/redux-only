import ReduxComponent from './ReduxComponent';
import { increment, decrement } from './redux/reducer/counter';

export default class Counter extends ReduxComponent {
  constructor(element, { store, usageState }) {
    super(element, { store, usageState });
    this.$result = this.$element.querySelector('.js-result');
    this.$increment = this.$element.querySelector('.js-increment');

    this.$increment.addEventListener('click', () => {
      this.dispatch(increment());
    });

    console.log(this.state.counter);
  }

  render() {
    this.$result.textContent = this.state.counter.count;
  }
}
