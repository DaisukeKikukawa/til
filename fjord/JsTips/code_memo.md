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
変数を初期化した後で変数を var で宣言することができてしまう
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
