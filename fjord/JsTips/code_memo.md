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
