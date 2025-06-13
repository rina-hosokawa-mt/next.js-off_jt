document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const inputName = document.getElementById("inputName");
    const inputAge = document.getElementById("inputAge");
    const inputJob = document.getElementById("inputJob");
    const inputIntroduce = document.getElementById("inputIntroduce");

    const name = inputName.value.trim();
    const age = Number.parseInt(inputAge.value, 10);
    const job = inputJob.value;
    const introduce = inputIntroduce.value.trim();

    const errors = [];

    if (name === "") {
      errors.push("名前を入力してください。");
    }

    if (Number.isNaN(age)) {
      errors.push("年齢を入力してください。");
    } else if (age < 18) {
      errors.push("年齢は18歳以上で入力してください。");
    }

    if (job === "") {
      errors.push("職業を選択してください。");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const inputData = {
      name,
      age,
      job,
      introduce,
    };

    console.log("送信データ(JSON):");
    console.log(JSON.stringify(inputData, null, 2));
    alert("送信されました！");
  });
});
