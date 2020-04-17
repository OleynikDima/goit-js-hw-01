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
  for (let ingredient of ingredients){
    function createItem(itemLi){
        const  item = document.createElement('li');
        item.textContent = `${itemLi}`;
        return item;  
    }
    getIngredients.append(createItem(ingredient))
}

