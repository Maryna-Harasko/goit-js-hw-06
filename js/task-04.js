let counterValue = 0;
const valueEl = document.querySelector("#value")

const decrementButtonEl = document.querySelector('[data-action = "decrement"]')

const incrementButtonEl = document.querySelector('[data-action = "increment"]')

function updateValueEl(){
    valueEl.textContent = counterValue

}

decrementButtonEl.addEventListener('click', decrClick)
incrementButtonEl.addEventListener('click', incrClick)

function decrClick(){
    counterValue -= 1
    console.log(counterValue)
    updateValueEl ()
}

function incrClick(){
    counterValue += 1
    console.log(counterValue)
    updateValueEl ()
}