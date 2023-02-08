const nameInputEl = document.querySelector('#name-input');
const textOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    if (event.currentTarget.value !== ""){
    textOutputEl.textContent = event.currentTarget.value.trim()
    }
    else textOutputEl.textContent = "Anonymous"
}
