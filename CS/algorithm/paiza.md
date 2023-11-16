```
<!-- D190:センチをミリに -->
```

## C084:【キャンペーン問題】枠で囲む
```
reader.on('close', () => {
  for (var i = 0; i <= lines[0].length + 1; i++) {
      process.stdout.write('+')
  }
  console.log('')
  console.log('+' + lines[0] + '+')
  for (var i = 0; i <= lines[0].length + 1; i++) {
      process.stdout.write('+')
  }
});
```
## C097:プレゼント応募企画の実施

```
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  for (let i = 1;i <= lines[0];i++) {
      if (i % lines[0] == 0 && i % lines[1] == 0) {
          console.log('AB');
      } else if (i % lines[1] == 0) {
          console.log('A');
      } else if (i % lines[2]) {
          console.log('B');
      } else {
          console.log('N');
      }
  }
});
```

## C115:渋滞の距離
```
reader.on('close', () => {
    spaceIndex = lines[0].indexOf(' ')
  let array_2 = lines[0].substr(spaceIndex+1,lines[0].length)
  let array_1 = lines[0].substr(0,spaceIndex)
  　let count = 0;
  for (var i = 1; i < Number(array_1); i++) {
    if (Number(lines[i]) <= array_2) {
        count += Number(lines[i])
    }
  }
  console.log(count);
});
```

## C016:Leet文字列
```
reader.on('close', () => {
  let resultString = "";
  for (var i = 0; i < lines[0].length; i++) {
      if(lines[0][i] == "A") {
          resultString += "4"
      } else if(lines[0][i] == "E") {
          resultString += "3"
      } else if(lines[0][i] == "G") {
          resultString += "6"
      } else if(lines[0][i] == "I") {
          resultString += "1"
      } else if(lines[0][i] == "O") {
          resultString += "0"
      } else if (lines[0][i] == "S") {
          resultString += "5"
      } else if(lines[0][i] == "Z") {
          resultString += "2"
      } else {
          resultString += lines[0][i]
      }
  }
  console.log(resultString)
});
```


