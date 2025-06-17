import { BASE_API_URL } from "./common.js";

document.addEventListener("DOMContentLoaded", () => {
  const loadingEl = document.getElementById("loading");
  const containerEl = document.getElementById("container");

  async function fetchWithRetry(url, options = {}, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.warn(`Fetch attempt ${attempt} failed:`, error.message);

        if (attempt === retries) {
          throw new Error("API取得に失敗しました（リトライ上限）");
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }

  fetchWithRetry(`${BASE_API_URL}/users`)
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
