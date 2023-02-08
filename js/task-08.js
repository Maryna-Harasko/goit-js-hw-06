const formEl = document.querySelector(".login-form")

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value
    const formData = {
        email,
        password
    }
    email === "" || password === "" ? alert("Треба заповнити усі поля")
    : console.log(formData);
  event.currentTarget.reset();
}
