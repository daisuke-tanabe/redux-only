export default class ReduxComponent {
  constructor(root, store) {
    this.$root = root;
    this.state = store;
    this.dispatch = store.dispatch;

    store.subscribe(() => {
      this.state = store;
      this.render();
    });
  }

  get state() {
    return this._state;
  }

  set state(store) {
    this._state = store.getState();
  }

  // 継承先が利用する
  render() {}
}
