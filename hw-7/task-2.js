'use script'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  const getIngredients = document.getElementById('ingredients')
  const getItem = ingredients.map((el,ind,acc)=> {
    const item = document.createElement('li');
    item.textContent = el
    return item
  });
  getIngredients.append(...getItem)
  console.log(getIngredients);
  



