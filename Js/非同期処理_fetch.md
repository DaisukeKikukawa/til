# fetch
- サーバーからデータなどを取得する際に`fetch`を使用
- `fetch`実行後は`Promise`が返却される
- `promise`が返ってくると`then`を使って処理を記述できる

```
const URL = 'http://hoge-hoge'
fetch(URL)
  .then((res) => {
    console.log(res) // fetchで取得したレスポンスを表示
  })
  .catch((e) => {
    console.error(e) // 失敗したらエラーを取得してコンソールに表示
  })
```
