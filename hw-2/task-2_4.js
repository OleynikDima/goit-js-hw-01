'use strict';

const formatString = function(string) {
          let deleteString = string.slice(0, 40);
            const newTriple = ['...'];
            let allStrnig;
                if(deleteString.length < string.length ){
              allStrnig = deleteString.concat(newTriple);
                } else {
                  return deleteString;
                }
                return allStrnig;
  };
  

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );