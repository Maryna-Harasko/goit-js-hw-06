const inputControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControlEl.addEventListener('input', (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`
})
