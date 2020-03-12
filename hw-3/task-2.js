'use script'

const countProps = function(obj) {
    
    const summ = Object.entries(obj);  
    let total = 0;
    total += summ.length;
    return total;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3