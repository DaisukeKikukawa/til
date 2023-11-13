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
