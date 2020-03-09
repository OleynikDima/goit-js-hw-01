'use script'
const numbers = [];
let input;
let total = 0;


do {
    input = prompt('введите любое число' );
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    }else if (input === null){
        break;
    }else{
        numbers.push(Number(input));
    }
    console.log(numbers);
    
}while (input !== null)
    for (let i = 0; i < numbers.length; i ++){
        total += numbers[i];
    }

console.log(`Общая сумма чисел равна ${total}`);
