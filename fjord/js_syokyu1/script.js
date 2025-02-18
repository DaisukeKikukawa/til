// JavaScript をここに書きます
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "ボタンが押されました!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");
const button = document.querySelector("button");

// for (const button of buttons) {
button.addEventListener("click", createParagraph);
// }
// buttons.forEach(button => button.addEventListener("click", createParagraph));
