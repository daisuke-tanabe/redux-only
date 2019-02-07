export default class ReduxComponent {
  constructor(store) {
    this.state = store.getState();
    this.dispatch = store.dispatch;

    store.subscribe(() => {
      console.log('actionがdispatchされたら呼び出されたので、ツリーの一部が変更されている可能性がある');
      const newState = store.getState();

      if (this.state !== newState) {
        console.log('現在のthis.storeと新しいstoreの中身が違う');
        this.state = newState;
        console.log('のでrenderする');
        this.render();
        return;
      }

      console.log('のでrenderする');
      this.render();
    });
  }

  // 継承元では扱わずに継承先が利用する
  render() {}
}
