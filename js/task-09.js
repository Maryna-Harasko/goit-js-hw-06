const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color")
const pEl = document.querySelector(".color")

buttonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  pEl.textContent = bodyEl.style.backgroundColor;
}
)

function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
