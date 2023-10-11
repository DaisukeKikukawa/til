# Reactで使うJs
- 関数宣言の場合、呼び出しが宣言よりも上でも呼び出せる

# オブジェクトの分割代入
```
const myFavoriteAnimal = {
  name: 'ロッキー',
  type: 'dog'
}

// オブジェクトの分割代入
const { name, type} = myFavoriteAnimal

// 分割代入を使用した結果
console.log(name) // 'ロッキー'
console.log(type) // 'dog'
```

# 配列の分割代入
```
// 配列の定義
const myFavoriteAnimal = ['ロッキー', 'dog']

// 配列の分割代入
const [name, type] = myFavoriteAnimal

// 分割代入を使用した結果
console.log(name) // 'ロッキー'
console.log(type) // 'dog'
```

# オブジェクトの省略記法
- オブジェクトの省略記法では、:（コロン）で区切られたプロパティ名と値が同じ場合、値の記述を省略します。
```
// 各プロパティを定義
const name = 'The Beatles'
const members = 4
const origin = 'Liverpool'

//オブジェクトを定義
const band = {
  name,
  members,
  origin
}

//出力
console.log(band) //{ name: 'The Beatles', members: 4, origin: 'Liverpool'}
```

# スプレッド構文
- 配列やオブジェクトのクローンを作りたい際に用いる

# map/forEach/filter

# mapメソッド
新しい配列を必要としない場合や値を返す必要がない場合は、forEachメソッドを使用
呼び出し元の配列に処理を行い、新しい配列を作成する
コードは割愛

# fileter
filterメソッドを呼び出した配列から、条件に合う要素を含めた配列を返す
