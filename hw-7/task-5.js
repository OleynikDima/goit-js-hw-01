'use script'



const output = document.querySelector('#name-output')
const text = output.textContent
const input = document.querySelector('#name-input').addEventListener('input', handler);


function handler(event){
  output.textContent  = event.currentTarget.value 
  ? event.currentTarget.value 
  : output.textContent = text
 };




