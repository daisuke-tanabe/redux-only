export default class ReduxComponent {
  constructor(element, { store, usageState }) {
    this.$element = element;
    this.state = store.getState();
    this.dispatch = store.dispatch;
    // console.log(filter);

    store.subscribe(() => {
      console.log('subscribe!!');
      const newState = store.getState();

      // ここで空かどうか返せばいいかも？
      usageState.filter(state => {
        this.state[state] = newState[state];
      });

      this.render();
    });

    // console.log(store)
    // console.log(filter);
  }

  // 継承先が利用するメソッド
  render() {}
}
