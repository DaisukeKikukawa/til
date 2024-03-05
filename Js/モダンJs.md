論理演算子の本当の意味

|| は左側がtruthyの時その時点で返却する。全てnullだった場合は最後の値を返す。
```js
const num = undefined;
const fee = num || "金額未設定です";
```

&& は左側がfalsyの時その時点で返却する。
```js
const num2 = "ABC";
const fee2 = num2 && "何か設定されました"
```
