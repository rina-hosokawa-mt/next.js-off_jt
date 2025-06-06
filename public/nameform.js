const nameInput = document.getElementById("nameInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    message.innerText = "名前を入力してください";
  } else {
    message.innerText = `こんにちは、${name}さん！`;
  }
});
