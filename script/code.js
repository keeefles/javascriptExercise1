const btnSubmit =
document.getElementById('btnSubmit')
btnSubmit.addEventListener('click', calculateResult)

let numb1 = document.getElementById('numb1')
let numb2 = document.getElementById('numb2')

function calculateResult(){
    let total = +numb1.value + +numb2.value
    let sum = document.getElementById('output')
    sum.innerHTML /*textElement instead of innerHTML*/= total
}

/*
1. Get the button and input elements reference and 
store them on a specific variable
2. Create a function that will perform the addition logic 
and display the sum on a label (id -> output)

*/

/*
1. innerHTML is used when you'd like to add content/another element from within the HTML file.
 */

/* 
Solution #2

const btnAdd = document.querySelector ('#output')
function addition(){
    let numb1 = document.getElementById('numb1').value
    let numb1 = document.getElementById('numb2').value
    // let sum = +numb1 + +numb2
    let sum = eval(`${numb1} + ${numb2}`)
}

*/