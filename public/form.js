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

    const inputData = {
      name,
      age,
      job,
      introduce,
    };

    const errors = validateForm(inputData);

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    console.log("送信データ:\n${JSON.stringify(data, null, 2)}");
    alert("送信されました！");
  });

  function validateForm(data) {
    const errors = [];

    if (data.name === "") {
      errors.push("名前を入力してください。");
    }

    if (Number.isNaN(data.age)) {
      errors.push("年齢を入力してください。");
    } else if (data.age < 18) {
      errors.push("年齢は18歳以上で入力してください。");
    }

    if (data.job === "") {
      errors.push("職業を選択してください。");
    }
    return errors;
  }
});
