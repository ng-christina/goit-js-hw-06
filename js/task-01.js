const categoriesList = document.querySelector('#categories');
console.log("Number of categories :", categoriesList.children.length)
const element1 = categoriesList.querySelectorAll('.item')
   element1.forEach(item=>{
    const title= item.querySelector('h2').textContent;
    const items = item.querySelectorAll(`li`).length;
     console.log(`Category:`, title)
     console.log( `Elements:`, items)
   })
  