export default class ReduxComponent {
  constructor($root, store) {
    this.$root = $root;
    this.state = store.getState();
    this.dispatch = store.dispatch;

    console.log(this.state);

    store.subscribe(() => {
      // 暫定処理
      this.state = store.getState();
      console.log(this.state);
      this.render();

      // もう少し理解したらここやる
      //
      // console.log('actionがdispatchされたら呼び出されたので、ツリーの一部が変更されている可能性がある');
      // const newState = store.getState();
      //
      // if (this.state !== newState) {
      //   console.log('現在のthis.storeと新しいstoreの中身が違う');
      //   this.state = newState;
      //   console.log('のでrenderする');
      //   this.render();
      //   return;
      // }
      //
      // console.log('のでrenderする');
      // this.render();
    });
  }

  render() {
    // 継承元に存在しない場合のエラーを回避
    // Error avoidance
  }
}
