const nameinput = document.getElementById("nameinput");
const showButton = document.getElementById("showButton");
const message = document.getElementById("message");
showButton.addEventListener("click", () => {
  if (nameinput.value === "") {
    message.innerText = "名前を入力してね";
  } else {
    message.innerText = `こんにちは、${nameinput.value}さん！`;
  }
});
