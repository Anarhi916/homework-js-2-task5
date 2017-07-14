let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let inp3 = document.querySelector('.inp3');
let button = document.querySelector('button');

button.addEventListener('click', whatIsBiggest);

function whatIsBiggest(){
   let number = Math.max(inp1.value, inp2.value, inp3.value);
    alert('Максимальное число ' + number);
}