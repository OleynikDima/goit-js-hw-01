//test -2
'use strict';
const total = 100;
const ordered = 20;
let productQuantity; 
if (total >= ordered) {
   
  productQuantity = ('Заказ оформлен, с вами свяжется менеджер');
} else {
  productQuantity = ('На складе недостаточно твоаров!');
}

console.log(productQuantity);