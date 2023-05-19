const categoriesList = document.querySelector('#categories');
const element1 = categoriesList.querySelectorAll('.item')
console.log("Number of categories :", element1.length)
   element1.forEach(item=>{
    const title= item.querySelector('h2').textContent;
    const items = item.querySelectorAll(`li`).length;
     console.log(`Category:`, title)
     console.log( `Elements:`, items)
   })
  

// const categoriesList = document.querySelector('#categories');
// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`В списке ${categoriesItems.length} категории.`);

// categoriesItems.forEach(item => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const categoryItems = item.querySelectorAll('li').length;

//   console.log(`Категория: ${categoryTitle}. Количество элементов: ${categoryItems}.`);
// });
