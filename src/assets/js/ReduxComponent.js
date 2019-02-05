export default class ReduxComponent {
  constructor(store) {
    this.store = store;
    this.dispatch = store.dispatch;

    store.subscribe(() => {
      this.store = store;
      const newStore = store.getState();
      if (this.store !== newStore) {
        this.render();
      }
    });
  }

  get store() {
    return this._store;
  }

  set store(store) {
    this._store = store.getState();
  }

  // 継承元では扱わずに継承先が利用する
  render() {}
}
