import ReduxComponent from './ReduxComponent';
import { input, submit } from './redux/reducer/form';

export default class Form extends ReduxComponent {
  constructor($root, store) {
    super($root, store);
    this.$root = $root;
    this.$fields = Array.from(this.$root.querySelectorAll('.js-field'));

    this.$fields.forEach(($field, index) => {
      const $inputs = Array.from($field.querySelectorAll('.js-input'));
      $inputs.forEach($input => {
        $input.addEventListener('input', ({ target }) => {
          this.dispatch(input(index, target.value));
        });
      })
    });

    this.$root.addEventListener('submit', event => {
      // 送信可能なら
      if (this.state.form.isSendable) {
        this.$root.submit();
        return;
      }

      // 送信をキャンセルする
      event.preventDefault();

      this.$fields.forEach((field, index) => {
        // TODO ここ問題
        field.querySelector('.js-error').classList.toggle('is-hidden', !this.state.form.fields[index].error);
      });
    });
  }

  static initializeState($root) {
    const $field = Array.from($root.querySelectorAll('.js-field'));
    const fields = $field.map((field, index) => {
      const type = field.getAttribute('data-type');

      if (type === 'text' || type === 'textarea') {
        const $input = field.querySelector('.js-input');
        const value = $input.value;
        return {
          id: index,
          type,
          value,
          error: value === ''
        }
      }

      if (type === 'radio') {
        const $inputGroup = Array.from(field.querySelectorAll('.js-input'));
        const hasChecked = $inputGroup.filter($input => $input.checked === true);

        return {
          id: index,
          type,
          value: hasChecked.length === 0 ? "" : hasChecked[0].value,
          error: hasChecked.length === 0
        }
      }
    });

    const isSendable = fields.some(field => field.error === false);

    return {
      fields,
      isSendable
    };
  }
}
