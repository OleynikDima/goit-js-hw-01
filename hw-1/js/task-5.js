

let cost;
let input= prompt('Choise City')

if (input === null) {
  alert('Отмена')
} else {
  input = input.toLowerCase();
  switch (input){

  case 'китай': 
  cost = 100;
  break;

  case 'чили': 
  cost = 250;
  break;
  
  case 'австралия': 
  cost = 170;
  break;

  case 'индия ': 
  cost = 80;
  break;

  case 'ямайка': 
  cost = 120;
  break;

  default: 
  alert('Ввашей стране нет доставки');
  }
}

let amount;
input = input[0].toLowerCase() + input.substr(1);
if (cost){
   do {
     amount = prompt('Введите кол-во товара')
      if (Number.isNaN(Number(amount))) {
        alert('Введите число');
      }else {
          if (amount) {
            alert (`Доставака в ${input} будет стоить ${cost * amount}кредитов `);
          }
        break;
        }
      }
      while (amount !== null);
      if (amount === null){
        alert('Cansel')
      }
   }
console.log( cost, amount);