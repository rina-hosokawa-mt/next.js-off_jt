document.addEventListener("DOMContentLoaded", () => {
  const loadingEl = document.getElementById("loading");
  const containerEl = document.getElementById("container");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("ネットワークエラーです");
      }
      return response.json();
    })
    .then((users) => {
      loadingEl.style.display = "none";
      const ul = document.createElement("ul");

      for (const user of users) {
        const li = document.createElement("li");
        li.textContent = user.name;
        ul.appendChild(li);
      }

      containerEl.appendChild(ul);
    })
    .catch((error) => {
      loadingEl.textContent = `エラーが発生しました：${error.message}`;
    });
});
