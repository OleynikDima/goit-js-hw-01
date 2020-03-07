'use strict';

const checkForSpam = function(message) {
  const newMessage2 = message.toLowerCase();
  const newMessage = newMessage2.split(' ');
  const a = 'spam';
  const b = 'sale';

  return newMessage.includes(a,b);
  
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true