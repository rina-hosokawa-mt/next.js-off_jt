document.getElementById("loading").style.display = "block";
document.addEventListener("DOMContentLoaded", () => {
  fetchdata();
});
async function fetchdata() {
  try {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await Response.json();

    // biome-ignore lint/complexity/noForEach: <explanation>

    // biome-ignore lint/complexity/noForEach: <explanation>
    data.forEach((user) => {
      const li = document.createElement("li");

      li.textContent = user.name;
      document.getElementById("userlist").appendChild(li);
    });
    loading.style.display = "none";
  } catch (error) {
    loading.style.display = "none";
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "エラーが発生しました";
    document.getElementById("userlist").appendChild(errorMessage);
  }
}
