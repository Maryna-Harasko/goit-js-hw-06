const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

const innerIngredientList = ingredients.reduce(
  (previos, currentItem) => previos + `<li>${currentItem}</li>`, "")

ingredientsList.innerHTML = innerIngredientList;