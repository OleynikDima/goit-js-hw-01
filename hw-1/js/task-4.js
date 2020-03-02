// test-4
const credits = 23580;
const pricePerDroid = 3000;

let message;

const input = prompt('Какое кол-во дроидов хотите купить  у Властелина Галактики?');
let totalPrice = input * pricePerDroid;

if (input === null) {
  message = "Отменино пользователем";
} else if (isNaN(input[0]) || isNaN(input)) {
  message = 'введите число';
} else if (totalPrice < credits) {
  message = `Вы купили ${input}дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
} else {
  message = "Недостаточно средств на счету!";
}
alert(message);
console.log(message);