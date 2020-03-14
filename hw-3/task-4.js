const countTotalSalary = function(employees) {
    let total = 0;
    let name;
        const cahs = Object.values(employees);
        for (const money of cahs){
             total += money; 
        }
        return  {
            name: 'summUser',
            total: total};
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); 
