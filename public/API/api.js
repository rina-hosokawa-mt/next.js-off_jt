const form = document.getElementById("surveyform");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("username").value.trim();
  const age = Number.parseInt(document.getElementById("age").value);
  const job = form.job.value;
  const profile = form.profile.value.trim();

  if (name === "") {
    message.innerText = "名前を入力してね";
  } else if (age < 18 || age === "") {
    message.innerText = "18歳以上出ないと利用不可";
  } else if (job === "") {
    message.innerText = "職業を選択してね";
  } else {
    message.innerText = "";
    const data = {
      name,
      age,
      job,
      profile,
    };

    console.log(JSON.stringify(data, null, 2));
  }
});
