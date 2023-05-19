const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
const ingredient = ingredients.map((a)=> {
  const li= document.createElement('li');
  li.textContent = a
  li.classList.add("item")
  return li
 })
 console.log(ingredient);
 list.append(...ingredient);
 console.log(list)