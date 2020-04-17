'use script'



let span = document.querySelector('#value');

let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
increment.addEventListener('click', () => {
    counterValue += 1;
    span.textContent = counterValue;
    console.log(span);
    
});
  
const decrement = document.querySelector('button[data-action="decrement"]');
decrement.addEventListener('click', () => {
    counterValue -= 1;
    span.textContent = counterValue;
    console.log(span)
});








