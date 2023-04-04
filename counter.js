const increse = document.querySelector(".increment");
const decrase = document.querySelector(".deccrement");
const reset = document.querySelector(".reset");
const counter = document.querySelector(".counter span");
console.log(increse, decrase, reset, counter);
let count = 0;
function increment() {
  count++;
  counter.textContent = count;
}
increse.addEventListener("click", (item) => {
  increment();
});
function decrement() {
  if (count === 0) return (count = 0);
  count--;
  counter.textContent = count;
}
decrase.addEventListener("click", (item) => {
  decrement();
});
function resetFunc() {
  count = 0;
  counter.textContent = count;
}
reset.addEventListener("click", (item) => {
  resetFunc();
});
