// test -6
// ввести число promnt
// каждое новое число + к старому 
// while вводить много раз до тех пор пока плозоватиль ненажмет cansel
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'


let total = 0;
let userInput;

do {
  userInput = prompt('Введите любое число');
    if (Number.isNaN(Number(userInput))){
       alert('Введите число');
    }else {
    total += Number(userInput);
  console.log(userInput);
    }
  }while (userInput !== null){
    alert(`Общая сумма чисел ${total}`)
  }
  console.log(total);