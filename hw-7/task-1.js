'use script'


const getCategories = document
    .querySelector('ul#categories')
    .querySelectorAll('li.item');

console.log(`В списке ${getCategories.length} категории.`);


const getTextNameCategories = document.querySelector('h2')
      .textContent
      
  console.log(`Категория:${getTextNameCategories}`);

const a = document.querySelector('.item').querySelectorAll('li');
console.log(`Количество эелементов:${a.length}`);









