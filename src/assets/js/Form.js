import ReduxComponent from './ReduxComponent';
import { initialize, input, submit } from './redux/reducer/form';

export const initialState = {
  hoge: 0
};

export default class Form extends ReduxComponent {
  constructor(root, store) {
    super(store);

    console.log(this.state)
    this.$root = root;
    this.$field = Array.from(this.$root.querySelectorAll('.js-field'));

    this.$field.forEach((field, index) => {
      field.querySelector('.js-input').addEventListener('input', ({ target }) => {
        this.dispatch(input(index, target.value));
      });
    });

    this.$root.addEventListener('submit', event => {
      // 送信可能なら
      if (this.state.form.isSendable) {
        this.$root.submit();
        return;
      }

      // 送信をキャンセルする
      event.preventDefault();

      // this.$field.forEach((field, index) => {
      //   field.querySelector('.js-error').classList.toggle('is-hidden', !this.state.form.field[index].error);
      // });
    });
  }

  // storeデータを作成する(初期化する)
  // initialize() {
  //   const field = this.$field.map((field, index) => {
  //     const $input = field.querySelector('.js-input');
  //     const type = {
  //       INPUT: $input.getAttribute('type'),
  //       TEXTAREA: 'textarea'
  //     };
  //     const value = $input.value;
  //
  //     return {
  //       id: index,
  //       type: type[$input.tagName],
  //       error: value === '',
  //       value
  //     }
  //   });
  //
  //   const isSendable = false;
  //
  //   this.dispatch(initialize({
  //     field,
  //     isSendable
  //   }));
  // }

  render() {
    console.log('render!!');
    this.$field.forEach((field, index) => {
      field.querySelector('.js-error').classList.toggle('is-hidden', !this.state.form.field[index].error);
    });
  }
}
