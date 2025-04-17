// ボタンと変更対象の要素を取得
const button = document.getElementById("changeTextBtn");
const title = document.getElementById("mainTitle");
const nextButton = document.getElementById("nextButton")
const previousButton = document.getElementById("previousButton")
const buttons = document.getElementById("buttons");

// ボタンにクリックイベントリスナーを追加
button.addEventListener("click", function () {
  title.textContent = "テキストが変更されました！";
});

// トグル機能の追加
let isChanged = false;
const originalText = title.textContent;

button.addEventListener("click", function () {
  if (isChanged) {
    title.textContent = originalText;
  } else {
    title.textContent = "テキストが変更されました！";
  }
  isChanged = !isChanged;
});

// ランダムテキストの使用
const texts = [
  "こんにちは！",
  "やあ！",
  "ハロー！",
  "おはよう！",
  "こんばんは！",
];

const colors = ["red","green","blue","pink"]

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * texts.length);
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  title.textContent = texts[randomIndex];
  title.style.color = colors[randomColorIndex];
});

// 3
let currentIndex = 0;

title.textContent = texts[currentIndex];

nextButton.addEventListener("click", function () {
  if (currentIndex + 1 >= texts.length) {
    currentIndex = 0; // 配列の最後の要素を超えたら最初に戻る
  } else {
    currentIndex = currentIndex + 1; // 次のインデックスに進む
  }
  title.textContent = texts[currentIndex];
});

previousButton.addEventListener("click", function () {
  if (currentIndex - 1 < 0) {
    currentIndex = texts.length - 1; // 配列の最初の要素を超えたら最後に戻る
  } else {
    currentIndex = currentIndex - 1; // 前のインデックスに戻る
  }
  title.textContent = texts[currentIndex];
});
