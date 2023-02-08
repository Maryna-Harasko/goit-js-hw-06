const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener('blur', validation) 

function validation(event){
    if (event.currentTarget.value.length >= textInputEl.dataset.length){
        textInputEl.classList.remove('invalid')
        return textInputEl.classList.add('valid');
    }
    else 
        textInputEl.classList.remove('valid')
        return textInputEl.classList.add('invalid')
}