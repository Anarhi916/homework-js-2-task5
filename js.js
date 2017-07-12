let input = document.querySelectorAll('input');
let button = document.querySelector('button');

button.addEventListener('click', whatIsBiggest);

function whatIsBiggest(){
    let number = 0;
    for (let i = 0; i < input.length; i++) {

        if(input[i].value > number){
            number = input[i].value;            
        }  
        input[i].value = '';      
    }
    alert('Максимальное число ' + number);
}