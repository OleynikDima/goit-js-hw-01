'use script'

const span = document.querySelector('span#text')
const input = document.querySelector('input#font-size-control').addEventListener('input',(event) => span.style.fontSize = event.currentTarget.value + 'px') 





