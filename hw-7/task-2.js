'use script'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];





  const getItem = ingredients.map((el,ind,acc)=> {
    const getIngredients = document.getElementById('ingredients')
    const item = document.createElement('li');
    item.textContent = el  
    getIngredients.append(item)
  });

  
  
  
  
// const getIngredients = document.getElementById('ingredients')  
//     function createItem(itemLi){
//         const  item = document.createElement('li');
//         item.textContent = `${itemLi}`;
//         return item;  
//     }

// }
// getIngredients.append(createItem(ingredient))
// console.log(getIngredients);


