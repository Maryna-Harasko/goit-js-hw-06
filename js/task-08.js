const formEl = document.querySelector(".login-form")

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
    const email = event.currentTarget.email.value.trim();
    const password = event.currentTarget.password.value
    const formData = {
        email,
        password
    }
  if (email === "" || password === ""){
    alert("Треба заповнити усі поля")
  } 
  else {
    console.log(formData);
    event.currentTarget.reset();
  }
}
