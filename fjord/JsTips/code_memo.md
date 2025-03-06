### Jsでの繰り返し処理の書き方
#### forEach
```javascript
buttons.forEach(button => {
  button.addEventListener("click", createParagraph);
});
```

#### for...of
```javascript
for (const button of buttons) {
  console.log(button);
  button.addEventListener("click", createParagraph);
}
```

### varの巻き上げ
変数を初期化したあとで変数をvarで宣言することができてしまう
現在はletが導入されており、ほとんどvarが使われることはない
ちなみにletでは以下のコードはエラーになる
以下が具体例
``` javascript
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

#### letの挙動
当たり前のことに見えるけど、以下は再宣言をしてしまっているので、エラーになる

```javascript
let myName = "Chris";
let myName = "Bob";
```
以下のようにすればOK
```javascript
let myName = "Chris";
myName = "Bob";
```

#### いつ const を使い、いつ let を使うか
const を使用して値に名前をつけると、コードを見ている人に、この名前は決して異なる値に割り当てることができないことを伝えることができる
**宣言時に変数を初期化でき、後で再代入する必要がない場合は、その変数を定数にする**


## 条件文

mapとfileterの違い
filterは渡す関数が論理値を返す点が異なる


## FizzBuzzメモ
import { inspect } from 'util';
inspect.colors = false;

// console.log(typeof "文字列")
    console.log(1)
    console.log(true)
    console.log(new Date())
    console.log(Symbol("id"));
    console.log(null);
    console.log("Hello, World!");

## 無名関数
1. 関数の引数として使うとき
```
textBox.addEventListener("keydown", function (event) {
  console.log(`"${event.key}" を押しました。`);
});
```

1. 変数に関数を代入するとき
以下のように関数に名前をつけても良いが、変数に名前をつけて代入しているため、
```
var myfun = function hoge(x,y){
    return x+y;
}
```

以下のようにできる
```
var myfun = function(x,y){
    return x+y;
}
```

## アロー関数
例えばmapの場合に通常の関数宣言だと以下のようになるが、
```
const originals = [1, 2, 3];
originals.map(function (item) {return item * 2})
```

アロー関数を使うとreturnを省略できる
また、引数の()も省略可能
```
originals.map( item => item * 2)
```

## DOM操作
```javascript
function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}
```

## 配列からランダムな値を取得
```javascript
subjectArray[Math.floor(Math.random() * subjectArray.length)];
```

## サンプル
```javascript
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

function chooseName(names) {
 para.textContent =  names[Math.floor(Math.random() * names.length)];
}

chooseName(names);

section.innerHTML = ' ';

section.appendChild(para);
```

## eventの追加方法

```javascript
function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

// ①
btn.addEventListener("click", changeBackground);
// ②
btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};
// ③
btn.onclick = changeBackground;

```

## eventについて
```javascript
<div class="button-bar">
    <button data-color="red">Red</button>
    <button data-color="yellow">Yellow</button>
    <button data-color="green">Green</button>
    <button data-color="purple">Purple</button>
  </div>

  <script>

    const buttonBar = document.querySelector('.button-bar');

    buttonBar.addEventListener("click", (e) => {
      const color = e.target.dataset.color;
      buttonBar.style.backgroundColor = color;
      console.log(e);
    })

  </script>
```

## 課題: イメージギャラリー
```html
<body>
    <h1>Image gallery example</h1>

    <div class="full-img">
      <img class="displayed-img" src="images/pic1.jpg" alt="Closeup of a human eye">
      <div class="overlay"></div>
      <button class="dark">Darken</button>
    </div>

    <div class="thumb-bar">


    </div>
    <script src="main.js"></script>
  </body>
```

```javascript
const imgPaths = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const imgAlts = ["1の画像", "2の画像", "3の画像", "4の画像", "5の画像"];
for (let i = 0; i <= imgPaths.length -1; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${imgPaths[i]}`);
  newImage.setAttribute("alt", imgAlts[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (e) => {
  displayedImage.src = e.target.src
})

btn.addEventListener("click", (e) => {
  if (e.target.className === "dark") {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    btn.innerText = "Lighten";
    btn.className = "light"
  } else {
    overlay.style.backgroundColor = "rgba(0, 0, 0,0)";
    btn.innerText = "Darken";
    btn.className = "dark";
  }
})
```

### コード整形
```
npm run fix
npm run lint
```

### カレンダープログラム
日付関連のメモ
``` javascript
const argv = minimist(process.argv.slice(2));
const days = ["日","月","火","水","木","金","土"];
const now = new Date();
const year = argv.y ? argv.y : now.getFullYear();
const month =argv.m ? argv.m : now.getMonth() + 1;
const MonthFirstDateDayOfWeek = new Date(year, month - 1, 1).getDay();
const MonthFirstDate = new Date(year, month - 1, 1).getDate();
const MonthLastDate = new Date(year, month, 0).getDate();
```

### 三項演算子
boolean ? true : false;

### オブジェクトの基本
```javascript
const person = {
  name: ["ボブ","スミス"],
  age: 32,
  bio: function name(params) {
    console.log(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  },
  // 以下でも可
  // bio() {
  //   console.log(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  // }
  introduceSelf: function name(params) {
    console.log(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  },
  // 以下でも可
  // introduceSelf() {
  //   console.log(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  // }
};
```

### ブラケット記法でのプロパティへのアクセス
```javascript
const person = {
  name: ["ボブ", "スミス"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["ボブ", "スミス"]
logProperty("age");
// 32
```

### 新しいメンバーの追加
```javascript
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

### ドット記法とブラケット記法の違い
オブジェクトにプロパティを追加する部分がことなる
ドット記法は、名前を指す変数ではなく、書いたとおりのメンバー名のみ受け入れることができる


```javascript
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

### "this"について
通常はそこまで意識する必要がないが、コンストラクターを利用する際に重要な考えになる

オブジェクト
```javascript
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`こんにちは、${this.name}です。`);
  };
  return obj;
}
const frankie = createPerson("フランキー");
frankie.introduceSelf();
// "こんにちは、フランキーです。"
```
↓
コンストラクター
```javascript
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`こんにちは、${this.name}です。`);
  };
}
const frankie = new Person("フランキー");
frankie.introduceSelf();
// "こんにちは、フランキーです。"
```

コンストラクターとは、newキーワードを使って呼び出される関数
コンストラクターは、慣習上、大文字で始められる
- コンストラクターを呼び出すと、次のようなことが行われます
  - 新しいオブジェクトを作成する
  - 新しいオブジェクトにthisを結び付け、コンストラクターのコードでthisを参照することができるようにする
  - コンストラクターでコードを実行する
  - その新しいオブジェクトを返す


### オブジェクトのプロトタイプ
プロトタイプを使った例
```javascript
function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
}

// greeting メソッドを prototype に追加
Cat.prototype.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
};

// インスタンスを作成
const cat1 = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');

// メソッド呼び出し
cat1.greeting();
cat2.greeting();
```

### プロトタイプのまとめ方
```javascript
var User = function(name, age) {
    this.name = name;
    this.age = age;
}


User.prototype.getName = function() {
    return this.name;
}

User.prototype.getAge = function() {
    return this.age;
}
```

```javascript
User.prototype = {
    getName: function() {
        return this.name;
    },

    getAge: function() {
        return this.age;
    }
}
```

### クラスとインスタンス
一般に、コンストラクターはクラス定義の一部として書き出され、通常はクラスそのものと同じ名前を持っています。

### ポリモーフィズム
メソッドが同じ名前で、異なるクラスで異なる実装を持つことをポリモーフィズムと呼ぶ

### 継承
```javascript
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

```javascript
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

```
サブクラス (Professor) のコンストラクターでは、親クラス (Person) のコンストラクターをsuper()で必ず呼び出さなければならない。


```javascript
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength); // name は "square", sides は 4 に固定
  }

  calcArea() {
    console.log(this.sideLength ** 2); // 正方形の面積 = 辺の長さの2乗
  }
}

// Square インスタンスを作成
const square = new Square(5);

// メソッドを呼び出して動作確認
square.calcPerimeter(); // 20
square.calcArea(); // 25

```

### for...in
オブジェクト（連想配列）に対して利用するもの
```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for...of
配列に対して利用するもの
```javascript
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

### Object.entries()
使い方1: オブジェクトを for...of でループする

```javascript
const obj = { a: "apple", b: "banana", c: "cherry" };

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

a: apple
b: banana
c: cherry
```

使い方2: Object.entries() を使ってオブジェクトを配列に変換
```javascript
const obj = { x: 1, y: 2, z: 3 };
const entries = Object.entries(obj);
console.log(entries);

[ ['x', 1], ['y', 2], ['z', 3] ]
```

使い方3:例 3: Object.entries() と map() でオブジェクトの値を変換

```javascript
const prices = { apple: 100, banana: 200, cherry: 300 };

const discountPrices = Object.entries(prices).map(([key, value]) => [key, value * 0.9]);
console.log(Object.fromEntries(discountPrices));

{ apple: 90, banana: 180, cherry: 270 }
```

### ミュタータブルとイミュータブル
### 値渡しと参照渡し
**値渡し**
引数は基本的に関数に値渡しされるので、関数本体のコードで関数に渡された引数に完全に新しい値を代入しても、その変更は元の変数には影響を与えない→これをイミュータブル(immutable)という→さらにこのような変数の渡し方を値渡しという
**参照渡し**
オブジェクトを引数として渡し、関数がオブジェクトのプロパティを変更した場合、その変更は元の変数に影響を与える→これをミュータブル(mutable)という→この渡し方を参照渡しという

### 元の配列を変更したくないとき
方法①: slice() でコピーする (浅いコピー)
`  const copyArr = theArr.slice(); // 配列のコピーを作成`
方法②: スプレッド演算子 (...) でコピー
`  const copyArr = [...theArr]; // スプレッド構文でコピー`
方法③: map() でコピー
`const copyArr = theArr.map(value => value); // 配列のコピーを作成`

### Jsのfalseについて
以下のようなコードの場合、JavaScriptではfalseとみなされる値が多く、ユーザーの入力に対して条件演算子 (?) を使うのだと意図しない挙動を引き起こす可能性が高い。
入力がない場合を考慮した処理を書きたい場合は、条件を具体的に明示するか、もしくは別の演算子を使用すること。
https://developer.mozilla.org/ja/docs/Glossary/Falsy

```javascript
const argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv.y ? argv.y : now.getFullYear();
```

### オブジェクトオブジェクトのまま扱う

以下はプリミティブな型を使ったコード

``` ruby
first_day = Date.new(y, m, 1).day
last_day = Date.new(y, m, -1).day

(first_day..last_day).each do |day|
  wday = Date.new(y, m, day).wday
  if wday == 6
    # ...
```

以下はオブジェクトのままのコード

```ruby
first_date = Date.new(y, m, 1)
last_date = Date.new(y, m, -1)

(first_date..last_date).each do |date|
  if date.saturday?
    # ...
```

```javascript
for (let i = startDate; i.getDate() <= lastDate.getDate(); i.setDate(i.getDate() + 1)) {
  if (i.getDate() === 1) {
    process.stdout.write(indentByStartDay);
  }
  if (i.getDate() < 10) {
    process.stdout.write(` ${String(i.getDate())}`);
  } else {
    process.stdout.write(String(i.getDate()));
  }
  if (i.getDay() !== 6 && i !== lastDate.getDate()) {
    process.stdout.write(" ");
  }
  if (i.getDay() === 6) {
    console.log();
  }
}

```

修正前のコード
```javascript
#!/usr/bin/env node

import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv.y ? argv.y : now.getFullYear();
const month = argv.m ? argv.m : now.getMonth() + 1;
const startDayOfWeek = new Date(year, month - 1, 1).getDay();
const lastDateOfMonth = new Date(year, month, 0).getDate();
let isFirstLineOfMonth = true;
let dayOfWeekCounter = startDayOfWeek;
let indentByStartDay = "";

switch (startDayOfWeek) {
  case 0:
    indentByStartDay = "";
    break;
  case 1:
    indentByStartDay = "   ";
    break;
  case 2:
    indentByStartDay = "      ";
    break;
  case 3:
    indentByStartDay = "         ";
    break;
  case 4:
    indentByStartDay = "            ";
    break;
  case 5:
    indentByStartDay = "               ";
    break;
  case 6:
    indentByStartDay = "                  ";
    break;
}

process.stdout.write("      ");
console.log(`${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let i = 1; i <= lastDateOfMonth; i++) {
  if (isFirstLineOfMonth) {
    process.stdout.write(indentByStartDay);
    isFirstLineOfMonth = false;
  }
  if (i < 10) {
    process.stdout.write(" " + String(i));
  } else {
    process.stdout.write(String(i));
  }
  process.stdout.write(" ");
  if (dayOfWeekCounter === 6) {
    console.log("");
    dayOfWeekCounter = -1;
  }
  dayOfWeekCounter++;
}

```

修正後のコード
```javascript
#!/usr/bin/env node

import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
const now = new Date();
const year = argv.y !== undefined ? argv.y : now.getFullYear();
const month = argv.m !== undefined ? argv.m : now.getMonth() + 1;

const startDate = new Date(year, month - 1, 1);
const lastDate = new Date(year, month, 0);

let indentByStartDay = "";

indentByStartDay = " ".repeat(startDate.getDay() * 3);

process.stdout.write("      ");
console.log(`${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");

for (let i = startDate; i <= lastDate; i.setDate(i.getDate() + 1)) {
  if (i.getDate() === 1) {
    process.stdout.write(indentByStartDay);
  }
  if (i.getDate() < 10) {
    process.stdout.write(` ${String(i.getDate())}`);
  } else {
    process.stdout.write(String(i.getDate()));
  }
  if (i.getDay() !== 6 && i !== lastDate.getDate()) {
    process.stdout.write(" ");
  }
  if (i.getDay() === 6) {
    console.log();
  }
}

```

### null合体演算子
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

`const year = argv.y ??= now.getFullYear();`
