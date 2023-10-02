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

# axios
```
// リクエスト先のURL
const url = "https://jsonplaceholder.typicode.com/users";

// リクエストに成功した場合はレスポンスを出力
// リクエストに失敗した場合はエラーを出力
axios.get(url)
  .then(response => console.log(response))
 .catch(error => console.log(error))
```

# async-await
asyncをつけることで自分で非同期関数を作ることができる。
戻り値にpromiseを含む関数を自分で作成することができる。
awaitはasync内でしか使えない

```
const url = 'https://foobar.com';
async function asyncFunc() {
  const response = await fetch(url); // awaitをつけることで処理の完了を待ち、次の行まで実行しない
  const data = await response.json(); // awaitをつけることで処理の完了を待ち、次の行まで実行しない
  console.log(data);
}

asyncFunc(); // 実行
```
