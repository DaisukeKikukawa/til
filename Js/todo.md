```js
index.js 

import "./styles.css";

// 追加ボタン
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  createIcompleteTodo(inputText);
};

// 完了ボタン
const onClickComplete = () => {
  alert("完了");
};

// 削除ボタン
const onClickDelete = () => {
  //   alert("削除");
  //　押された削除ボタンの親にあるliタグを未完了リストから削除
  const deleteTarget = document.getElementById("delete-btn").closest("li");
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

//渡された引数を元に未完了のTODOを作成する関数
const createIcompleteTodo = (todo) => {
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  // button生成
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  completeBtn.innerText = "完了";

  //完了ボタンの動き
  completeBtn.addEventListener("click", () => {
    const moveTarget = completeBtn.closest("li");
    completeBtn.nextElementSibling.remove();
    completeBtn.remove();
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backBtn);
    // 完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  completeBtn.id = "complete-btn";
  deleteBtn.id = "delete-btn";
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    const deleteTarget = deleteBtn.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
document
  .getElementById("complete-btn")
  .addEventListener("click", onClickComplete);
// document.getElementById("delete-btn").addEventListener("click", onClickDelete);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>js-todo</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="input-area">
      <input id="add-text" placeholder="todoを入力" />
      <button id="add-button">追加</button>
    </div>
    <div class="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul id="incomplete-list">
        <li>
          <div class="list-row">
            <p class="todo-item">TODOです</p>
            <button id="complete-btn">完了</button>
            <button id="delete-btn">削除</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="complete-area">
      <p class="title">完了のTODO</p>
      <ul id="complete-list">
        <li>
          <div class="list-row">
            <p class="todo-item">TODOでした</p>
            <button>戻す</button>
          </div>
        </li>
      </ul>
    </div>
    <script src="./index.mjs" type="module"></script>
  </body>
</html>
```

```css

body {
  font-family: sans-serif;
  color: #666;
}

input {
  border-radius: 8px;
  border: none;
  padding: 6px 16px;
}
button {
  border-radius: 8px;
  border: none;
  padding: 4px 16px;
  margin: 0px 2px;
}

button:hover {
  background-color: #79a8a9;
  color: #fff;
  cursor: pointer;
}

.input-area {
  background-color: #c6e5d9;
  width: 400px;
  height: 30px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.incomplete-area {
  border: 2px solid #aacfd0;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.title {
  text-align: center;
  margin-top: 0;
  font-weight: bold;
}

.list-row {
  display: flex;
  align-items: center;
}

.todo-item {
  margin: 6px;
}

.complete-area {
  border: 2px solid #aacfd0;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  background-color: #c9dede;
}

```
