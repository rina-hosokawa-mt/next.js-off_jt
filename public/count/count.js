let count = 0;
const countDis = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  count += 1;
  countDis.innerText = count;
});

minusButton.addEventListener("click", () => {
  count -= 1;
  countDis.innerText = count;
});
