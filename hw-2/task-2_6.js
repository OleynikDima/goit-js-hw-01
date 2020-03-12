'use script'
const numbers = [];
let input;
let total = 0;



do {
    input = prompt('введите любое число' );
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    }else if (input !== null){
        numbers.push(Number(input));
        console.log(numbers);
    } 

}while (input !== null){
    if (numbers.length > 0){
        for (let i = 0; i < numbers.length; i ++){
          total += numbers[i];
        }
        console.log('Общая сумма чисел равна', total);
    }else {
        console.log('Масив пуст');
    }
 };
    