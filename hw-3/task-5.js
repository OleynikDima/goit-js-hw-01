'use script'

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  

// пересчет массива 
// присвоить переменною 

  const getAllPropValues = function(arr, prop) {
    let allMassiv = [];
    // const emptyMassiv = [];
    for (let i = 0; i < arr.length; i ++){
      let a = arr[i][prop];            
      allMassiv.push(a);
      if (a === undefined){
        allMassiv.pop(a);
      }
    }
    return allMassiv;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []