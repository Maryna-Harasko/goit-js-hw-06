const numberInputEl = document.querySelector("input");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxNewEl = document.querySelector("#boxes");

createButtonEl.addEventListener('click', createBoxes)
destroyButtonEl.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
  amount = numberInputEl.value
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = 20 + i*10 + "px";
    newBox.style.height = 20 + i*10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxArr.push(newBox)
    boxNewEl.append(...boxArr)
    
  }
}

function destroyBoxes(){
  numberInputEl.value = ""
  boxNewEl.innerHTML = ""
}