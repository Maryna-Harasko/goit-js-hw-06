const textInputEl = document.querySelector("#validation-input");

textInputEl.addEventListener('blur', validation) 

function validation(event){
    if (event.currentTarget.value.length === Number(textInputEl.dataset.length)){
        addClass('invalid', 'valid');
    }
    else {
        addClass('valid', 'invalid');
    }
    function addClass (item1, item2) {
        textInputEl.classList.remove(item1);
        textInputEl.classList.add(item2);
    }
}
