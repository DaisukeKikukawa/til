- コンポーネントに渡す引数がprops

```js
ColorfulMessage.jsx

export const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyleA = {
    color: props.color,
    fontSize: "18px",
    margin: 100,
  };

  return <p style={contentStyleA}>{props.children}</p>;
};
```

```js
index.js

import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="blue">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
```
