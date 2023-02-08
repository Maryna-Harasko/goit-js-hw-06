const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

const newItems = ingredients.map(function(item){
  const ingredientItem = document.createElement('li')
  ingredientItem.classList.add('item')
  ingredientItem.textContent = item
  return ingredientItem
})
ingredientsList.append(...newItems)