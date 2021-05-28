const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
   });

const listOfIngredientsEl = document.querySelector('#ingredients');
listOfIngredientsEl.append(...listOfIngredients);